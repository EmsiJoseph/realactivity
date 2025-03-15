// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
    src: string
    alt: string
    text: string
}

export interface FooterAbout {
    title: string
    aboutText: string
    logo: Logo
}

export interface SubCategory {
    subCategory: string
    subCategoryLink: string
}

export interface FooterColumn {
    category: string
    subCategories: SubCategory[]
}

export interface SubFooter {
    copyRightText: string
    links?: SubCategory[]
}

export interface FooterData {
    footerAbout: FooterAbout
    footerColumns: FooterColumn[]
    subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
    footerAbout: {
        title: 'RealActivity',
        aboutText:
            'AI-driven solutions that streamline healthcare workflows, enhance efficiency, and maximize ROI. Designed for providers and executives, it automates documentation, compliance, and revenue management—seamlessly integrating into your existing systems.',
        logo: {
            src: '/logo.svg',
            alt: 'RealActivity',
            text: 'RealActivity'
        }
    },
    footerColumns: [
        {
            category: 'Solutions',
            subCategories: [
                {
                    subCategory: 'RAPS Copilot',
                    subCategoryLink: '/copilot'
                },
                {
                    subCategory: 'Intelligent RVU Agent',
                    subCategoryLink: '/agents'
                },
                {
                    subCategory: 'CMS Compliance Agent',
                    subCategoryLink: '/agents'
                },
                {
                    subCategory: 'Wheelhouse AI CoE',
                    subCategoryLink: '/wheelhouse-ai-coe'
                },
                {
                    subCategory: 'Strategic Advisory Services',
                    subCategoryLink: '/solutions/advisory-services'
                }
            ]
        },
        {
            category: 'Who we serve',
            subCategories: [
                {
                    subCategory: 'Healthcare executives',
                    subCategoryLink: '/executives'
                },
                {
                    subCategory: 'Physicians & Clinicians',
                    subCategoryLink: '/clinicians'
                },
                {
                    subCategory: 'Compliance & Legal Teams',
                    subCategoryLink: '/compliance'
                },
                {
                    subCategory: 'Clinical & IT Leadership',
                    subCategoryLink: '/leadership'
                },
                {
                    subCategory: 'Global Healthcare Cloud and AI Community',
                    subCategoryLink: '/community'
                }
            ]
        },
        {
            category: 'Company',
            subCategories: [
                {
                    subCategory: 'About us',
                    subCategoryLink: '/company/about'
                },
                {
                    subCategory: 'Leadership',
                    subCategoryLink: '/company/leadership'
                },
                {
                    subCategory: 'Careers',
                    subCategoryLink: '/company/careers'
                },
                {
                    subCategory: 'Partners',
                    subCategoryLink: '/company/partners'
                },
                {
                    subCategory: 'Partner with us',
                    subCategoryLink: '/company/partners'
                }
            ]
        },
        {
            category: 'Connect',
            subCategories: [
                {
                    subCategory: 'Book a Consultation (1 🌳 Planted)',
                    subCategoryLink: '/clinicians/consultation'
                },
                {
                    subCategory: 'Talk to an Expert',
                    subCategoryLink: '/clinicians/expert'
                },
                {
                    subCategory: 'Events',
                    subCategoryLink: '/clinicians/events'
                },
                {
                    subCategory: 'Join our community',
                    subCategoryLink: '/clinicians/community'
                }
            ]
        },

        {
            category: 'Resources',
            subCategories: [
                {
                    subCategory: 'Blogs',
                    subCategoryLink: '/resources/blogs'
                },
                {
                    subCategory: 'Briefs & Data Sheets',
                    subCategoryLink: '/resources/briefs'
                },
                {
                    subCategory: 'Strategic Guides',
                    subCategoryLink: '/resources/guides'
                },
                {
                    subCategory: 'Case Studies',
                    subCategoryLink: '/resources/case-studies'
                },
                {
                    subCategory: 'Radical AI Governance',
                    subCategoryLink: '/radical-ai'
                },
                {
                    subCategory: 'ROI Calculator',
                    subCategoryLink: '/resources/roi-calculator'
                }
            ]
        }
    ],
    subFooter: {
        copyRightText: 'RealActivity',
        links: [
            {
                subCategory: 'Terms',
                subCategoryLink: '/terms'
            },
            {
                subCategory: 'Sitemap',
                subCategoryLink: '/sitemap'
            }
            ]
    }
}
