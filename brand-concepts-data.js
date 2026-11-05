/* ==========================================================================
   BRAND LAB — content data (single source of truth for #/brand-lab; the old #/brand-concepts URL still works)

   The list page and every detail page (#/brand-lab/<slug>) are rendered
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
    title: "BRAND LAB",
    intro: "가상의 브랜드를 기획하고, 브랜드 아이덴티티부터 제품 비주얼과 광고 콘텐츠까지 구현한 개인 프로젝트입니다. 브랜드의 컨셉와 시각적 방향을 설계하고, 생성형 AI를 활용해 다양한 형태의 콘텐츠로 확장합니다.",

    /* shared small labels */
    labels: {
        back: "← BRAND LAB",
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
            tagline: "Dressed in Moonlight. — Beauty in Stillness.",
            format: "Eau de Parfum · 50ml · 15~25만원 (기획 가격 컨셉)",

            /* card text on the list page */
            summary: "몽환적이고 신비로운 감성을 바탕으로 기획한 가상의 니치 향수 브랜드입니다. 브랜드 아이덴티티와 제품 컨셉를 설계하고, 생성형 AI를 활용해 비주얼 및 광고 콘텐츠로 확장하는 프로젝트입니다.",
            /* hero text on the detail page */
            description: "몽환적이고 신비로운 감성을 기반으로 기획한 가상의 니치 향수 브랜드입니다. 브랜드 컨셉부터 비주얼 아이덴티티, 제품 디자인과 광고 콘텐츠까지 일관된 세계관으로 구현하는 것을 목표로 합니다.",

            /* images. Empty string / [] = not available yet (shows a quiet placeholder, nothing invented) */
            heroImage: "assets/brand-concepts/luneve/hero.jpg?v=2",   /* card image on the list page + key visual at the top of the detail page */
            heroImageSize: { w: 1693, h: 929 },
            wordmark: "",             /* confirmed logo file only, e.g. "assets/brand-concepts/luneve/identity/wordmark.svg" */

            sections: {
                overview: {
                    title: "01 / BRAND OVERVIEW",
                    subtitle: "Brand Concept & Direction",
                    intro: "LUNÉVE는 몽환적이고 신비로운 분위기 속에서 감각적인 향의 경험을 표현하고자 기획한 가상의 니치 향수 브랜드입니다. 브랜드가 전달하고자 하는 감성과 시각적 방향을 정의하고, 제품과 광고 콘텐츠 전반에 일관되게 적용할 수 있는 컨셉를 구축합니다."
                },
                identity: {
                    title: "02 / BRAND IDENTITY",
                    subtitle: "Visual Identity System",
                    intro: "브랜드의 몽환적이고 우아한 분위기를 시각적으로 표현하기 위해 로고, 심볼, 컬러, 타이포그래피 등 일관된 비주얼 아이덴티티를 구성합니다."
                },
                product: {
                    title: "03 / PRODUCT & VISUAL",
                    subtitle: "Product Design & Key Visual",
                    intro: "브랜드 컨셉를 기반으로 향수 제품의 형태와 소재, 시각적 분위기를 구체화합니다. 제품 비주얼과 키비주얼을 통해 LUNÉVE만의 감성을 일관된 이미지로 표현합니다."
                },
                campaign: {
                    title: "04 / AI CAMPAIGN",
                    subtitle: "AI-Generated Campaign Content",
                    intro: "브랜드의 세계관과 제품 컨셉를 바탕으로 생성형 AI를 활용한 광고 영상 및 디지털 콘텐츠를 제작합니다. 비주얼 기획부터 이미지 생성, 영상 제작과 편집까지 하나의 브랜드 경험으로 연결합니다."
                }
            },

            /* 01 BRAND OVERVIEW — optional texts (leave "" until confirmed), moodboard images */
            overview: {
                concept: "고요함을 향기로 경험하는 젠더리스 니치 프래그런스 브랜드입니다. 밤과 새벽의 고요함, 어둠을 은은하게 밝히는 달빛에서 출발해, 시간에 구애받지 않는 시그니처 향으로 자신에게 집중하는 순간을 만듭니다.",
                mood: "달빛은 시각적 상징, 고요함은 브랜드의 가치입니다. 몽환적이면서도 차분한 경험을 빛, 촉감, 향, 여백으로 연결하며, 깊은 밤은 세계관일 뿐 사용 시간의 제한이 아닙니다.",
                target: "타깃은 성별보다 취향과 감각으로 정의합니다. 절제된 미감과 독창적인 스토리를 선호하며, 향을 자신의 취향을 표현하는 방식으로 받아들이는 30–40 젠더리스 소비자를 상정합니다. 기획한 타깃과 가격 컨셉이며, 고객 조사나 실제 판매 성과를 의미하지 않습니다.",
                keywords: ["Ethereal", "Serene", "Refined", "Quiet Luxury", "Niche Premium"],
                moodboard: []    /* [{ src, alt, w, h }] */
            },

            /* short written notes shown above the images of a sub-section ([{ label, text }]) */
            texts: {
                logo: [
                    { label: "SYMBOL", text: "L 모노그램과 별빛 요소. 보틀·패키지·실링의 중심 서명이며, 곡선과 별빛의 관계를 유지합니다." },
                    { label: "WORDMARK", text: "확정된 워드마크 이미지를 그대로 사용합니다. 브랜드 표기는 LUNÉVE / 루네브입니다." },
                    { label: "USE", text: "원본 비율·곡선·별빛 위치 유지 / 어두운 면 위 은은한 실버 사용 / 제품과 여백의 중심에 배치" },
                    { label: "AVOID", text: "가로·세로 늘이기와 기울이기 / 별빛의 크기나 위치 바꾸기 / 강한 글로우·베벨·크롬 효과" }
                ],
                typography: [
                    { label: "HEADLINE", text: "Cormorant Garamond" },
                    { label: "BODY", text: "Inter · Noto Sans KR" },
                    { label: "WEB CANDIDATE", text: "Pretendard" },
                    { label: "NOTE", text: "최종 브랜드 서체는 로고와의 조화·라이선스·매체 테스트 후 확정합니다." }
                ],
                application: [
                    { label: "PACKAGE", text: "블루 틴트 보틀과 서랍형 박스. 매트 딥 네이비의 외부에서 실버 새틴의 내부로 열리며, 제품이 드러나는 순서를 설계합니다." },
                    { label: "RITUAL", text: "Pause — 일상의 속도를 낮춥니다. / Breathe — 맑고 부드러운 향에 집중합니다. / Remain — 과장되지 않은 여운을 남깁니다." }
                ],
                design: [
                    { label: "PRODUCT", text: "LUNÉVE Eau de Parfum 50ml, 젠더리스. 라운드 크리스털 보틀과 은은한 블루 틴트, 다면체 캡, 전면 실버 L 심볼." },
                    { label: "SCENT", text: "아쿠아틱 향의 맑은 감각, 적당한 확산력과 부드러운 잔향." }
                ],
                keyVisual: [
                    { label: "LIGHT", text: "푸른 달빛 · 부드러운 측광 · 은은한 림라이트" },
                    { label: "SPACE", text: "깊은 밤 · 고요한 수면 · 반사되는 공간" },
                    { label: "MUSE", text: "플래티넘 블론드와 업스타일, 크리스털 이어링·진주 디테일, 자연스러운 피부와 절제된 표정. 얼굴·헤어·피부톤·드레스의 연속성을 모든 장면에서 유지합니다." },
                    { label: "DETAIL", text: "실버 새틴과 미세한 반사 / 느린 손길과 원단의 움직임 / 자연스러운 피부와 절제된 광택" }
                ]
            },

            /* COLOR PALETTE — digital reference values; silver foil / satin / glass tint are validated with material samples */
            colors: [
                { name: "Midnight Navy",    hex: "#101B30", type: "Primary",   role: "주 배경 · 깊은 밤" },
                { name: "Moonlight Silver", hex: "#C7CDD7", type: "Secondary", role: "심볼 · 은은한 반사광" },
                { name: "Crystal Blue",     hex: "#B8D2E4", type: "Material",  role: "유리 틴트 · 제한적 포인트" },
                { name: "Lunar White",      hex: "#F4F5F7", type: "Neutral",   role: "밝은 면 · 정보 가독성" }
            ],
            colorRatio: [ { label: "NAVY", value: 60, hex: "#101B30" }, { label: "SILVER", value: 20, hex: "#C7CDD7" }, { label: "WHITE", value: 15, hex: "#F4F5F7" }, { label: "BLUE", value: 5, hex: "#B8D2E4" } ],

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
                application: [    /* 03 VISUAL APPLICATION: SNS, ad creatives, digital */
                    { src: "assets/brand-concepts/luneve/product/key-visual-1.jpg", alt: "LUNÉVE key visual — flowing light ribbon", w: 1086, h: 1448 },
                    { src: "assets/brand-concepts/luneve/product/key-visual-2.jpg", alt: "LUNÉVE key visual — bottle on water",        w: 1086, h: 1448 },
                    { src: "assets/brand-concepts/luneve/product/key-visual-3.jpg", alt: "LUNÉVE key visual — moon and reflection",    w: 1086, h: 1448 },
                    { src: "assets/brand-concepts/luneve/product/key-visual-4.jpg", alt: "LUNÉVE key visual — muse with bottle and moon", w: 1086, h: 1448 }
                ]
            },

            /* 04 AI CAMPAIGN */
            campaignVideos: {
                film: [            /* 01 BRAND FILM: [{ src, poster, w, h, title }] */
                    { src: "assets/brand-concepts/luneve/video/brand-film.mp4", poster: "assets/brand-concepts/luneve/video/brand-film.jpg", w: 1920, h: 1080, title: "LUNÉVE Brand Film" }
                ],
                shortForm: []      /* 02 SHORT-FORM CONTENT: vertical videos, same shape */
            },
            campaignImages: []     /* 03 CAMPAIGN VISUAL: [{ src, alt, w, h }] */
        }
    ]
};
