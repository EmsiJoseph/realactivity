// Social Links
// ------------
// Description: The social links data for the website.

export interface SocialLink {
    name: string
    link: string
    icon: string
}

export const socialLinks: SocialLink[] = [
    {
        name: 'facebook',
        link: '/',
        icon: 'mdi:facebook'
    },
    {
        name: 'instagram',
        link: '/',
        icon: 'mdi:instagram'
    },
    {
        name: 'x',
        link: '/',
        icon: 'simple-icons:x'  // Using X's new branding
    },
    {
        name: 'linkedin',
        link: '/',
        icon: 'mdi:linkedin'
    },
    {
        name: 'youtube',
        link: '/',
        icon: 'mdi:youtube'
    },
    {
        name: 'tiktok',
        link: '/',
        icon: 'simple-icons:tiktok'  // Using simple-icons for TikTok as MDI doesn't have a specific TikTok icon
    }
]
