import {NewsItem} from "@/components/ui/NewsCard.tsx";

export const news: NewsItem[] = [
    {
        id: '1',
        title: 'День Європи в Таїровському ліцеї',
        date: '09 травня 2025',
        images: ['https://scontent.fods8-1.fna.fbcdn.net/v/t39.30808-6/495258934_3115469265271884_1930048635459235775_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=laEYzDGNTJkQ7kNvwHZhmQQ&_nc_oc=Adk8sdS-dVqepQKgQC45d5uEiRduboj3Kba-YSNX0c7us6CDF3xV-TyysKettlHPQ0M&_nc_zt=23&_nc_ht=scontent.fods8-1.fna&_nc_gid=9Pv-khT3K28XJsO79vQm_g&oh=00_AfIb5G2gFT6ZrdxXK3cfh1lKT1ILZK6xUvGW-3rHdLJU4A&oe=682666E7',
            'https://scontent.fods8-1.fna.fbcdn.net/v/t39.30808-6/496255165_3115469315271879_3294060165487403727_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=51u-7Yt32UgQ7kNvwHr2IOt&_nc_oc=AdmFi1hrct4h5sJ7D7ECDjQN_BC3wXePrUFlnG7uDBVLLo_lCFuaHIPQx-kMriT8kpw&_nc_zt=23&_nc_ht=scontent.fods8-1.fna&_nc_gid=3L15QTlc7_8EincNOt27mQ&oh=00_AfKQCfELAzC-5_jmUWPwX7KzQRAIbjAez6axvblHrBhj4Q&oe=68266634',
            'https://scontent.fods8-1.fna.fbcdn.net/v/t39.30808-6/495246372_3115469365271874_7334669934449807148_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=1GLyYzpBWGwQ7kNvwHoN7Kj&_nc_oc=Admbbi7iXn9S5DsSZsKRfiCVEsYhQV6joPaQ4BBWCBY1E95372yTlVdJzv4S0Z0ura0&_nc_zt=23&_nc_ht=scontent.fods8-1.fna&_nc_gid=NyXKtqgGrsbmVok3mDTBHg&oh=00_AfIZwTYgRxn5wKZK5qIdkSPrXfE-jpi7-JzBBeCFElqrbw&oe=68265442',
            'https://scontent.fods8-1.fna.fbcdn.net/v/t39.30808-6/496296484_3115469425271868_270697654470227353_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=NsJiomJ-ZmcQ7kNvwF4Sp67&_nc_oc=Adl56ga5qiciwXHxLvD0x16Gz0cDMktClH8_1f545gurAESUVmsKsb9RAeEOsSuWRz8&_nc_zt=23&_nc_ht=scontent.fods8-1.fna&_nc_gid=gM-z101TIu0w9SsV4b0uGQ&oh=00_AfLWT-81QKg1eTqxkIbhJgbGqLHivf-NvnIGOEEgnufzgA&oe=68265667',
            'https://scontent.fods8-1.fna.fbcdn.net/v/t39.30808-6/496723046_3115469491938528_5701115887834187051_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=sKlAfNw-L_0Q7kNvwFejiTO&_nc_oc=AdnL2oISmskSRMM_yKYyresZhw4ESRFBz743ad1gWsIRLY6MeWzUvvnYmKAVCmi1uhk&_nc_zt=23&_nc_ht=scontent.fods8-1.fna&_nc_gid=xtxCwOMp1gQDcMyDgCSrrw&oh=00_AfKB7Dc9RDQmDmav_C7AcFIuLhHE0SYfE7uNijEPxSFESA&oe=682648D7',
            'https://scontent.fods8-1.fna.fbcdn.net/v/t39.30808-6/496298495_3115469528605191_6474895447612163873_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=NEMamysdZsYQ7kNvwEijmxa&_nc_oc=AdmdyUdHhAv6WsVXUYG9u231Mg4-9DpTbe5IidJREOojT9FTM-rKtsdyhCEAyOewNQI&_nc_zt=23&_nc_ht=scontent.fods8-1.fna&_nc_gid=qwT4hTG8Myt35UWk5Jmq7w&oh=00_AfIibTVYJvy8kTjCZkHYkg1lNCZOcXXNGIzh12i6KSUvhg&oe=68266620',
            'https://scontent.fods8-1.fna.fbcdn.net/v/t39.30808-6/495909591_3115469595271851_4699199419079049018_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=mvacro_27tYQ7kNvwFVAvmQ&_nc_oc=AdkN9eNM70wb_01kaPAlAH_JkuevnAjdkBWXONInWLAro4iATv1ldx0qZAnJ8Xr0PDc&_nc_zt=23&_nc_ht=scontent.fods8-1.fna&_nc_gid=Ml3PF7RtLR_14-N4KgijMw&oh=00_AfKvzlPIRsn74HqhBKbumMHM4ZongnlMoSYryz1LrbDKBA&oe=682642CE',
        ],
        category: 'Свята',
        content: `
      <p>Кожен клас – своя європейська зірка! 🌟 </p>
      <p>Жеребкування об'єднало учнів Таїровського ліцею в спільному творчому проєкті до Дня Європи. З цікавістю дізнавшись свою країну, діти з ентузіазмом взялися за створення стенгазет. І ось результат – перші витвори юних талантів, сповнені знань та креативу! 🇪🇺📰</p>
<p>Європа - це про спільні цінності, повагу та натхнення!</p>`
    }
];
