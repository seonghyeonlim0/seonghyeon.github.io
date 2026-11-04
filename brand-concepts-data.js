/* ==========================================================================
   BRAND CONCEPTS — content data (single source of truth for #/brand-concepts)

   The list page and every detail page (#/brand-concepts/<slug>) are rendered
   from this object. To add another fictional brand, copy the LUNÉVE object in
   `projects` and change the fields.

   HOW TO ADD ASSETS
   - Put files under  assets/brand-concepts/<slug>/{identity,product,campaign,video}/
   - Then add an entry to the matching array below, e.g.
       identityAssets.logo: [ { src: "assets/brand-concepts/luneve/identity/wordmark.png", alt: "LUNÉVE wordmark", w: 1600, h: 600 } ]
       campaignVideos.film: [ { src: ".../video/film.mp4", poster: ".../video/film.jpg", w: 1920, h: 1080, title: "Brand Film" } ]
   - `w` / `h` = real pixel size (used to keep the original aspect ratio).
   - Empty arrays are fine: the section shows a quiet "준비 중" note instead of
     fake content. Nothing is shown as finished work until an asset exists.
   - Text fields in `overview` are optional strings; leave them "" until the
     real brand strategy is confirmed (nothing is invented here).
   ========================================================================== */
window.BRAND_CONCEPTS = {

    /* list page */
    title: "BRAND CONCEPTS",
    intro: "가상의 브랜드를 기획하고, 브랜드 아이덴티티부터 제품 비주얼과 광고 콘텐츠까지 구현한 개인 프로젝트입니다. 브랜드의 콘셉트와 시각적 방향을 설계하고, 생성형 AI를 활용해 다양한 형태의 콘텐츠로 확장합니다.",

    /* shared small labels */
    labels: {
        back: "← BRAND CONCEPTS",
        readMore: "Read More",
        pending: "준비 중",
        disclaimer: "LUNÉVE는 실제로 판매되는 브랜드가 아닌, 개인 가상 브랜드 프로젝트입니다. 현재 제작 진행 중인 작업입니다."
    },

    projects: [
        {
            id: "luneve",
            slug: "luneve",
            brandName: "LUNÉVE",
            subtitle: "Virtual Niche Fragrance Brand",
            year: "2026",
            category: "Niche Fragrance",
            projectType: "Personal Project / Fictional Brand",
            scope: "Brand Strategy · Visual Identity · Creative Direction · AI Content Production",
            role: "Brand Planning · Creative Direction · Visual Design · AI Production",
            status: "진행 중",

            /* card text on the list page */
            summary: "몽환적이고 신비로운 감성을 바탕으로 기획한 가상의 니치 향수 브랜드입니다. 브랜드 아이덴티티와 제품 콘셉트를 설계하고, 생성형 AI를 활용해 비주얼 및 광고 콘텐츠로 확장하는 프로젝트입니다.",
            /* hero text on the detail page */
            description: "몽환적이고 신비로운 감성을 기반으로 기획한 가상의 니치 향수 브랜드입니다. 브랜드 콘셉트부터 비주얼 아이덴티티, 제품 디자인과 광고 콘텐츠까지 일관된 세계관으로 구현하는 것을 목표로 합니다.",

            /* images. Empty string / [] = not available yet (shows a quiet placeholder, nothing invented) */
            heroImage: "",            /* e.g. "assets/brand-concepts/luneve/hero.jpg" (card image + hero key visual) */
            heroImageSize: { w: 16, h: 9 },
            wordmark: "",             /* confirmed logo file only, e.g. "assets/brand-concepts/luneve/identity/wordmark.svg" */

            sections: {
                overview: {
                    title: "01 / BRAND OVERVIEW",
                    subtitle: "Brand Concept & Direction",
                    intro: "LUNÉVE는 몽환적이고 신비로운 분위기 속에서 감각적인 향의 경험을 표현하고자 기획한 가상의 니치 향수 브랜드입니다. 브랜드가 전달하고자 하는 감성과 시각적 방향을 정의하고, 제품과 광고 콘텐츠 전반에 일관되게 적용할 수 있는 콘셉트를 구축합니다."
                },
                identity: {
                    title: "02 / BRAND IDENTITY",
                    subtitle: "Visual Identity System",
                    intro: "브랜드의 몽환적이고 우아한 분위기를 시각적으로 표현하기 위해 로고, 심볼, 컬러, 타이포그래피 등 일관된 비주얼 아이덴티티를 구성합니다."
                },
                product: {
                    title: "03 / PRODUCT & VISUAL",
                    subtitle: "Product Design & Key Visual",
                    intro: "브랜드 콘셉트를 기반으로 향수 제품의 형태와 소재, 시각적 분위기를 구체화합니다. 제품 비주얼과 키비주얼을 통해 LUNÉVE만의 감성을 일관된 이미지로 표현합니다."
                },
                campaign: {
                    title: "04 / AI CAMPAIGN",
                    subtitle: "AI-Generated Campaign Content",
                    intro: "브랜드의 세계관과 제품 콘셉트를 바탕으로 생성형 AI를 활용한 광고 영상 및 디지털 콘텐츠를 제작합니다. 비주얼 기획부터 이미지 생성, 영상 제작과 편집까지 하나의 브랜드 경험으로 연결합니다."
                }
            },

            /* 01 BRAND OVERVIEW — optional texts (leave "" until confirmed), moodboard images */
            overview: {
                concept: "",     /* 브랜드 콘셉트 */
                mood: "",        /* 브랜드 무드 및 방향성 */
                target: "",      /* 타깃 고객 */
                keywords: [],    /* 브랜드 키워드 ["word", ...] */
                moodboard: []    /* [{ src, alt, w, h }] */
            },

            /* 02 BRAND IDENTITY  ([{ src, alt, w, h }]) */
            identityAssets: {
                logo: [            /* 01 LOGO & SYMBOL: wordmark, symbol, logo usage */
                    { src: "assets/brand-concepts/luneve/identity/wordmark.jpg", alt: "LUNÉVE wordmark", w: 2000, h: 1185 },
                    { src: "assets/brand-concepts/luneve/identity/symbol.jpg",   alt: "LUNÉVE symbol",   w: 2000, h: 1333 }
                ],
                color: [],         /* 02 COLOR PALETTE: main / sub colours, usage */
                typography: [],    /* 03 TYPOGRAPHY: main / sub type, applications */
                application: []    /* 04 BRAND APPLICATION: packaging / brand applications */
            },

            /* 03 PRODUCT & VISUAL  ([{ src, alt, w, h }]) */
            productImages: {
                design: [],        /* 01 PRODUCT DESIGN: single shots, details, angles */
                keyVisual: [],     /* 02 KEY VISUAL: brand key visual, campaign visual */
                application: []    /* 03 VISUAL APPLICATION: SNS, ad creatives, digital */
            },

            /* 04 AI CAMPAIGN */
            campaignVideos: {
                film: [],          /* 01 BRAND FILM: [{ src, poster, w, h, title }] */
                shortForm: []      /* 02 SHORT-FORM CONTENT: vertical videos, same shape */
            },
            campaignImages: []     /* 03 CAMPAIGN VISUAL: [{ src, alt, w, h }] */
        }
    ]
};
