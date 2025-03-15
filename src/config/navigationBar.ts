// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
    src: string
    alt: string
}

export interface NavSubItem {
    name: string
    link: string
}

export interface NavItem {
    name: string
    link: string
    submenu?: NavSubItem[]
}

export interface NavAction {
    name: string
    link: string
    style: string
    size: string
}

export interface NavData {
    logo: Logo
    navItems: NavItem[]
    navActions: NavAction[]
}

export const navigationBarData: NavData = {
    logo: {
        src: '/logo-vertical.svg',
        alt: 'AI built for Healthcare'
    },
    navItems: [
        {
            name: 'Solutions',
            link: '#',
            submenu: [
                {name: 'Provider Support Copilot', link: '/copilot'},
                {name: 'Intelligent RVU Agent', link: '/agents'},
                {name: 'CMS Compliance Agent', link: '/agents'},
                {name: 'Wheelhouse AI CoE', link: '/wheelhouse-ai-coe'},
                {name: 'Strategic Advisory Services', link: '/advisory-services'},
            ]
        },
        {
            name: 'Who we serve',
            link: '#',
            submenu: [
                {name: 'Healthcare executives', link: '/'},
                {name: 'Physicians & Clinicians', link: '/'},
                {name: 'Compliance & Legal Teams', link: '/'},
                {name: 'Clinical & IT Leadership', link: '/'},
                {name: 'Global Healthcare Cloud and AI Community', link: '/'}
            ]
        },
        {name: 'About us', link: '/about'},
        {name: 'Resources', link: '/resources'},
        {name: 'Radical AI Governance', link: '/radical-ai'}

    ],
    navActions: [{name: 'Contact us', link: '/', style: 'primary', size: 'lg'}]
}
