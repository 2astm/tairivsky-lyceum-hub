import axios from "axios";
import {writeFileSync} from "fs";

const API_VERSION = "v19.0";
const LIMIT = 50;

interface Attachment {
    media?: { image?: { src?: string }; source?: string };
    media_url?: string;
    subattachments?: { data: Attachment[] };
}

interface Post {
    id: string;
    message?: string;
    created_time: string;
    from?: { id: string; name: string };
    attachments?: { data: Attachment[] };
}

interface FacebookPost {
    id: string;
    from?: string;
    text?: string;
    created_time: string;
    attachments: string[];
}

async function fetchFacebookPosts(
    groupId: string,
    accessToken: string
): Promise<FacebookPost[]> {
    let url = `https://graph.facebook.com/${API_VERSION}/${groupId}/feed`;
    let params: Record<string, any> = {
        access_token: accessToken,
        fields:
            "id,message,created_time,from,attachments{media,subattachments,media_type,media_url}",
        limit: LIMIT,
    };

    const allPosts: FacebookPost[] = [];

    while (url) {
        const res = await axios.get(url, {params});
        const data = res.data;
        const posts: Post[] = data.data || [];

        for (const post of posts) {
            const attachments: string[] = [];

            if (post.attachments?.data) {
                const collect = (a: Attachment) => {
                    const mediaUrl =
                        a.media?.image?.src || a.media_url || a.media?.source || null;
                    if (mediaUrl) attachments.push(mediaUrl);
                    if (a.subattachments?.data) a.subattachments.data.forEach(collect);
                };
                post.attachments.data.forEach(collect);
            }

            allPosts.push({
                id: post.id,
                from: post.from?.name,
                text: post.message,
                created_time: post.created_time,
                attachments,
            });
        }

        url = data.paging?.next || null;
        params = {}; // только для первой страницы
    }

    return allPosts;
}

// CLI запуск
async function mainFunction() {
    const GROUP_ID = '301186951608235';
    const TOKEN = 'df97aaaf9a5a169c98b61bd765ead581';

    if (!TOKEN || !GROUP_ID) {
        console.error("❌ Укажи FB_ACCESS_TOKEN и FB_GROUP_ID");
        process.exit(1);
    }

    try {
        const posts = await fetchFacebookPosts(GROUP_ID, TOKEN);
        console.log(`✅ Загружено постов: ${posts.length}`);
        writeFileSync("facebook_posts.json", JSON.stringify(posts, null, 2), "utf8");
        console.log("💾 Сохранено facebook_posts.json");
    } catch (err: any) {
        console.error("❌ Ошибка:", err.response?.data || err.message);
        process.exitCode = 1;
    }
}

mainFunction().then();
