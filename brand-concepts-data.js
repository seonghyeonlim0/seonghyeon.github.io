/* ==========================================================================
   BRAND LAB — content data (single source of truth for #/brand-lab; the old #/brand-concepts URL still works)

   The list page and every detail page (#/brand-lab/<slug>) are rendered from
   this object. To add another fictional brand, copy the LUNÉVE object in
   `projects` and change the fields. Every brand uses the same 5 sections:
     01 BRAND OVERVIEW  (기획)         -> overview
     02 BRAND IDENTITY  (디자인)       -> identity
     03 PRODUCT & VISUAL (디자인·제작)  -> product
     04 AI CAMPAIGN     (제작)         -> campaign
     05 CREATIVE PROCESS (기획·제작)    -> process
   A section (or a sub-block inside it) is hidden automatically when it has no
   content, so nothing is ever shown as "coming soon".

   HOW TO ADD ASSETS
   - Put files under  assets/brand-concepts/<slug>/{identity,product,campaign,video}/
   - Add an entry to the matching array: { src, alt, w, h } for images,
     { src, poster, w, h, title } for videos (w / h = real pixel size).
   - Only write what is true about the real work (no sales / ad-spend claims).
   ========================================================================== */
window.BRAND_CONCEPTS = {

    /* list page */
    title: "BRAND LAB",
    intro: "가상의 브랜드를 직접 기획하고, 브랜드 아이덴티티부터 제품 비주얼과 광고 콘텐츠까지 제작한 개인 프로젝트입니다. 생성형 AI를 활용해 브랜드 컨셉을 다양한 이미지와 영상으로 구현합니다.",

    labels: {
        back: "← BRAND LAB",
        cardType: "Personal Project"
    },

    projects: [
        {
            id: "luneve",
            slug: "luneve",
            brandName: "LUNÉVE",
            subtitle: "Virtual Niche Fragrance Brand",
            category: "Niche Fragrance",
            year: "2026",
            projectType: "Personal Project / Fictional Brand",
            role: "Brand Planning · Creative Direction · Visual Design · AI Production",
            disclaimer: "LUNÉVE는 실제로 판매되는 브랜드가 아닌 개인 가상 브랜드 프로젝트이며, 제작 진행 중인 작업입니다.",

            /* card image on the list page + key visual at the top of the detail page */
            heroImage: "assets/brand-concepts/luneve/hero.jpg?v=2",
            heroImageSize: { w: 1693, h: 929 },

            sections: {

                /* 01 — planning: why the brand exists */
                overview: {
                    title: "01 / BRAND OVERVIEW",
                    skill: "PLANNING · 기획",
                    intro: "밤과 새벽의 고요함, 어둠을 은은하게 밝히는 달빛에서 출발한 젠더리스 니치 프래그런스 브랜드입니다.",
                    rows: [
                        { label: "CATEGORY", text: "Luxury Niche Fragrance · Eau de Parfum 50ml" },
                        { label: "TARGET", text: "30–40 젠더리스 — 절제된 미감과 독창적인 스토리를 선호하는 소비자" },
                        { label: "MESSAGE", text: "Dressed in Moonlight. — 고요함 속에서 발견하는 아름다움" }
                    ],
                    note: "타깃은 기획 컨셉이며 고객 조사나 실제 판매 결과가 아닙니다."
                },

                /* 02 — design: how the concept is turned into a visual system */
                identity: {
                    title: "02 / BRAND IDENTITY",
                    skill: "DESIGN · 디자인",
                    intro: "달과 별빛을 담은 L 모노그램, 네이비와 실버 중심의 팔레트.",
                    logo: [
                        { src: "assets/brand-concepts/luneve/identity/wordmark.jpg", alt: "LUNÉVE wordmark", w: 2000, h: 1185 },
                        { src: "assets/brand-concepts/luneve/identity/symbol.jpg",   alt: "LUNÉVE symbol",   w: 2000, h: 1333 }
                    ],
                    colors: [
                        { name: "Midnight Navy",    hex: "#101B30", type: "Primary",   role: "주 배경 · 깊은 밤" },
                        { name: "Moonlight Silver", hex: "#C7CDD7", type: "Secondary", role: "심볼 · 은은한 반사광" },
                        { name: "Crystal Blue",     hex: "#B8D2E4", type: "Material",  role: "유리 틴트 · 제한적 포인트" },
                        { name: "Lunar White",      hex: "#F4F5F7", type: "Neutral",   role: "밝은 면 · 정보 가독성" }
                    ],
                    typography: [
                        { label: "HEADLINE", text: "Cormorant Garamond" },
                        { label: "BODY", text: "Inter · Noto Sans KR" }
                    ],
                    application: []     /* identity applied to packaging etc. [{ src, alt, w, h }] — hidden while empty */
                },

                /* 03 — design + production: product and key visuals (first image is shown large) */
                product: {
                    title: "03 / PRODUCT & VISUAL",
                    skill: "DESIGN · PRODUCTION · 디자인·제작",
                    intro: "라운드 크리스털 보틀과 전면 실버 L 심볼, 달과 물 위의 반사광을 담은 키비주얼.",
                    images: [
                        { src: "assets/brand-concepts/luneve/product/key-visual-4.jpg", alt: "LUNÉVE key visual — muse with bottle and moon", w: 1086, h: 1448 },
                        { src: "assets/brand-concepts/luneve/product/key-visual-1.jpg", alt: "LUNÉVE key visual — flowing light ribbon",     w: 1086, h: 1448 },
                        { src: "assets/brand-concepts/luneve/product/key-visual-2.jpg", alt: "LUNÉVE key visual — bottle on water",           w: 1086, h: 1448 },
                        { src: "assets/brand-concepts/luneve/product/key-visual-3.jpg", alt: "LUNÉVE key visual — moon and reflection",       w: 1086, h: 1448 }
                    ]
                },

                /* 04 — production: how the plan shows up in the finished film */
                campaign: {
                    title: "04 / AI CAMPAIGN",
                    skill: "PRODUCTION · 제작",
                    intro: "달빛, 뮤즈, 소재, 고요한 수면을 담은 약 18초의 브랜드 필름.",
                    film: [
                        { src: "assets/brand-concepts/luneve/video/brand-film.mp4", poster: "assets/brand-concepts/luneve/video/brand-film.jpg", w: 1920, h: 1080, title: "LUNÉVE Brand Film" }
                    ],
                    shortForm: [],      /* vertical short-form videos [{ src, poster, w, h, title }] — hidden while empty */
                    images: []          /* campaign images [{ src, alt, w, h }] — hidden while empty */
                },

                /* 05 — planning + production: the work flow that was actually done */
                process: {
                    title: "05 / CREATIVE PROCESS",
                    skill: "PLANNING · PRODUCTION · 기획·제작",
                    intro: "기획서로 컨셉과 기준을 먼저 정한 뒤, 그에 맞춰 이미지와 영상을 생성하고 편집했습니다.",
                    steps: [
                        { label: "IDEATION",           text: "브랜드 컨셉·타깃·가격 컨셉 기획" },
                        { label: "CREATIVE DIRECTION", text: "로고·컬러·무드 방향과 뮤즈 설정" },
                        { label: "AI GENERATION",      text: "제품·키비주얼 이미지와 필름 소스 영상 제작" },
                        { label: "POST-PRODUCTION",    text: "클립 편집, 보정, 사운드" }
                    ]
                }
            }
        }
    ]
};
