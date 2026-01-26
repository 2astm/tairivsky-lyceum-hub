import {BarChart3, FileText, Languages} from "lucide-react";

export const categories = [
    {id: 'all', name: 'Всі'},
    // {id: 'general', name: 'Загальна інформація'},
    // {id: 'education', name: 'Освітній процес'},
    {id: 'admission', name: 'Вступ'},
    {id: 'administrative', name: 'Адміністративні питання'}
];

// Legal information sections based on Ukrainian law
export const legalSections = [
    {
        id: 'konkurs-na-zamishhennya-vakantnoyi-posadi-direktora',
        categories: ['administrative'],
        title: 'Проведення конкурсу на заміщення вакантної посади директора',
        icon: FileText,
        content: "Оголошення про проведення конкурсу на заміщення вакантної посади директора Таїровського ліцею Таїровської селищної ради Одеського району Одеської області",
        documents: [
            {
                label: 'Оголошення (PDF)',
                url: "/files/ogoloshennya-pro-konkurs-na-zamishhennya-vakantnoyi-posadi-direktora.pdf",
                type: 'pdf'
            }
        ]
    },
    {
        id: 'statut-litceju-2023',
        categories: ['administrative'],
        title: 'Статут ліцею',
        icon: FileText,
        content: "Статут Таїровського ліцею Таїровської селищної ради Одеського району Одеської області",
        documents: [
            {
                label: 'Статут (PDF)',
                url: "/files/documents/statut-litceju-2023.pdf",
                type: 'pdf'
            }
        ]
    },
    {
        id: 'license-2019',
        categories: ['administrative'],
        title: 'Ліцензія закладу',
        icon: FileText,
        content: "Розпорядження про видачу ліцензій на проводження освітньої діяльності комунальним закладам освіти Овідіопольского району Одеської області",
        documents: [
            {
                label: 'Ліцензія (PDF)',
                url: "/files/documents/license-2019.pdf",
                type: 'pdf'
            }
        ]
    },
    {
        id: 'stratehiya-rozvytku',
        categories: ['administrative'],
        title: 'Стратегія розвитку Таїровського ліцею',
        icon: FileText,
        content: "Стратегія розвитку Таїровського ліцею на 2025 - 2030 роки. Документ визначає основні напрямки розвитку закладу, цілі та завдання на найближчі роки.",
        documents: [
            {
                label: 'Стратегія розвитку (PDF)',
                url: "/files/stratehiia-rozvytku-taiirovskoho-litseiu.pdf",
                type: 'pdf'
            },
            {
                label: 'Затвердження стратегії (PDF)',
                url: "/files/zatverdgennia-stratehiii-rozvytku-taiirovskoho-litseiu.pdf",
                type: 'pdf'
            }
        ]
    },
    {
        id: 'oblik-ditej',
        categories: ['administrative'],
        title: 'Тереторія обслуговування Таїровського ліцею',
        icon: FileText,
        content: "Тереторія обслуговування Таїровського ліцею",
        documents: [
            {
                label: 'Облік дітей (PDF)',
                url: "/files/oblik-ditej.pdf",
                type: 'pdf'
            }
        ]
    },
    {
        id: 'mova',
        categories: ['administrative'],
        title: 'Мова освітнього процесу',
        icon: Languages,
        content: `Відповідно до <a href='https://zakon.rada.gov.ua/laws/show/2145-19#n111'>статті 7 Закону України «Про освіту»</a> мовою освітнього процесу в закладах освіти є державна мова.\nВідповідно до <a href="https://zakon.rada.gov.ua/laws/show/2704-19#n16">п.1 статті 1 Закону України «Про забезпечення функціонування української мови як державної»</a> єдиною державною (офіційною) мовою в Україні є українська мова.`,
        documents: []
    },
    {
        id: 'prijom-documentiv-2026',
        categories: ['admission'],
        title: 'Прийом документів для вступу у 1-ий клас, 2026 рік',
        icon: FileText,
        content: `З <b>02 березня по 29 травня 2026 року</b> буде здійснюватися прийом документів для вступу дітей до <b>1-го класу</b> Таїровського ліцею Таїровської селищної ради Одеського району Одеської області`,
        documents: [
            {
                label: 'Прийом документів (PDF)',
                url: "/files/prijom-documentiv-2026.pdf",
                type: 'pdf'
            }
        ]
    }
];
