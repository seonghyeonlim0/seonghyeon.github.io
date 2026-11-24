/* ==========================================================================
   AI WORKS — content data (single source of truth for the #/ai-creator page)

   Everything shown on the AI WORKS page is rendered from this object:
   titles, descriptions, roles, tools, 구분, video paths, posters, detail text.

   HOW TO EDIT
   - Text in [대괄호] is a PLACEHOLDER that has not been filled in yet.
     It is shown in a muted colour on the page. Replace it with real content.
   - Swap the representative work of a group : move it to the front of
     that group's list in `groups`.
   - Swap a video           : edit `src` (path under /videos) of that entry.
   - Add an Instagram reel without a file : { title, ig: "<id from https://www.instagram.com/reel/<id>/>", views, likes }
   - Swap a thumbnail       : replace the jpg in /videos/posters/ or edit
     `poster`. Keep `w` / `h` equal to the real video pixel size, they set
     the playback aspect ratio.
   - Add a project          : add an object to `projects` and its id to the
     `projects` list of a group.
   - Optional detail block  : add `comparison: { before: {src,poster,w,h},
     after: {src,poster,w,h} }` to a project to show 초기 결과 / 개선 결과.
   ========================================================================== */
window.AI_WORKS = {

    /* [1] page header */
    title: "AI WORKS",
    intro: "생성형 AI를 활용한 이미지 및 영상 콘텐츠를 기획하고 제작하였습니다. 브랜드와 제품을 새로운 시각으로 표현하는 비주얼 작업부터 캐릭터 IP 개발, 스토리텔링 콘텐츠까지 다양한 프로젝트를 진행하며, 기획과 제작 전반을 아우르는 작업을 진행할 수 있습니다.",

    /* CONTENT PERFORMANCE block (shown under OUTPUT on groups that have a `performance` object).
       Title / lead are shared; `stats` and `links` are set per account on the group.
       Per-video `views` are Instagram reel counts read on 2026-11-24 (Instagram rounds large
       values, e.g. "4.4만"); likes are not stored, the Instagram embed shows them live.
       Account totals = sum of all reel views of that account on 2026-11-24:
         UNKL 67 reels ~94,500 -> "92,000+"   |   Beom Doryeong 21 reels ~122,300 -> "121,000+"
       (rounded down with a margin for Instagram's rounding).
       Videos with 10,000+ views are always included in OUTPUT. */
    performance: {
        title: "CONTENT PERFORMANCE",
        lead: "실제 콘텐츠 운영 및 성과 분석"
    },
    /* [2][3][4] page groups, shown left to right (order = display order).
       Each group shows ONE representative work; "Read More" opens a page with all of them
       (#/ai-creator/more/<key>).
       - `title` / `tagline` / `desc`: group heading, one-line subtitle, paragraph
       - `projects` (project ids) or `series` / `videos`: works, played in place
         (first = representative)
       To change the representative work, move its id/video to the front. */
    groups: [
        {
            key: "beomdoryeong",
            readMore: {   /* content of the Read More page card */
                title: "BEOM DORYEONG",
                subtitle: "조선 호랑이 캐릭터 IP 애니메이션",
                category: "CHARACTER IP",
                year: "2026",
                plan: "근엄한 호랑이의 모습과 허당스러운 행동 사이의 반전을 컨셉으로 기획한 캐릭터 IP 프로젝트입니다. 조선시대 세계관을 바탕으로 일상 속 작은 사건을 짧고 유쾌한 애니메이션으로 제작했습니다.",
                tools: "ChatGPT / Claude / Runway (Seedance 2.5)",
                links: [
                    { label: "Instagram", url: "https://www.instagram.com/beomdoryeong/" }
                ]
            },
            performance: {   /* CONTENT PERFORMANCE of this account only */
                stats: [
                    { value: "121,000+", label: "범도령 계정 총 조회수 (릴스 합산)" },
                    { value: "Organic", label: "광고비 없이 자연 유입 중심 운영" }
                ],
                links: [{ label: "범도령", url: "https://www.instagram.com/beomdoryeong/reels/" }]
            },
            cover: { title: "맷돌", src: "videos/beom-millstone.mp4", poster: "videos/posters/beom-cover.jpg", w: 720, h: 1280, still: true },   /* thumbnail on the main AI WORKS page */
            label: "범도령",
            title: "범도령",
            videos: [
                { title: "맷돌", ig: "DfV7P55TyPE", views: "4.4만" },
                { title: "활쏘기", ig: "Df4lHjDNBaL", views: "3만" },
                { title: "말타기", ig: "DfqjckiN6ms", views: "4,374" },
                { title: "대장간", ig: "DfBV3QzTv1s", views: "4,332" },
                { title: "도자기", ig: "DfGdQoyzh_8", views: "3,444" },
                { title: "산군", ig: "DfJHYDMpWJU", views: "3,438" }
            ]
        },
        {
            key: "unkl",
            readMore: {   /* content of the Read More page card */
                title: "UNKL&ANTY",
                subtitle: "오리지널 캐릭터 애니메이션",
                category: "CHARACTER IP",
                year: "2026",
                plan: "서로 다른 개성을 가진 두 캐릭터의 엉뚱한 일상을 담은 코미디 애니메이션입니다. 짧은 영상 안에 상황 설정과 예상치 못한 반전을 구성하고, 과장된 움직임으로 캐릭터의 매력을 표현했습니다.",
                tools: "ChatGPT / Claude / ComfyUI (Minimax)",
                links: [
                    { label: "Instagram", url: "https://www.instagram.com/unkl.ush/" },
                    { label: "TikTok", url: "https://www.tiktok.com/@unkl.ush" }
                ]
            },
            performance: {   /* CONTENT PERFORMANCE of this account only */
                stats: [
                    { value: "92,000+", label: "UNKL 계정 총 조회수 (릴스 합산)" },
                    { value: "Organic", label: "광고비 없이 자연 유입 중심 운영" }
                ],
                links: [{ label: "UNKL", url: "https://www.instagram.com/unkl.ush/reels/" }]
            },
            cover: { title: "HOLD ON TIGHT!", src: "videos/unkl-ep02.mp4", poster: "videos/posters/unkl-cover.jpg", w: 864, h: 1536, still: true },   /* thumbnail on the main AI WORKS page */
            label: "UNKL&ANTY",
            title: "UNKL&ANTY",
            videos: [
                { title: "HOLD ON TIGHT!", ig: "DfcIcjPPo56", views: "2.6만" },
                { title: "BELLY NOT INCLUDED", ig: "DfW-216PppW", views: "2.3만" },
                { title: "ALMOST MADE IT!", ig: "DfhSAaXPUWT", views: "1.2만" },
                { title: "SNACKS GONE WILD!", ig: "Df2M6FrP8yX", views: "1.1만" },
                { title: "SOMETHING'S WRONG...", ig: "DfGeVX3Pw2u", views: "3,598" },
                { title: "NO BRAKES, NO COFFEE", ig: "DfrsDPwPyLN", views: "1,848" }
            ]
        },
        {
            key: "joseon-archive",
            readMore: {   /* content of the Read More page card */
                title: "조선의 모든 것",
                subtitle: "조선시대 상상 콘텐츠",
                category: "CREATIVE STORYTELLING",
                year: "2026",
                plan: "현대의 제품과 문화를 조선시대에 적용한다는 상상에서 출발한 AI 숏폼입니다. 전통적인 소재와 시대적 배경을 활용해 익숙한 아이디어를 색다른 비주얼과 움직임으로 구현했습니다."
            },
            cover: { title: "조선의 모든 것", poster: "videos/posters/joseon-cover.jpg", w: 941, h: 1672, still: true },   /* thumbnail on the main AI WORKS page (image only) */
            label: "조선의 모든 것",
            title: "조선의 모든 것",
            series: "joseon"
        },
        {
            key: "concept-works",
            aliases: ["ai-experiments", "what-if", "stock", "experiments"],   /* old addresses that now open this page */
            readMore: {   /* content of the Read More page card */
                title: "CONCEPT WORKS",
                subtitle: "Concept & Visual Exploration",
                category: "VISUAL EXPERIMENT",
                year: "2026",
                planLabel: "PROJECT OVERVIEW",
                plan: [
                    "현실과 상상의 경계를 넘어 다양한 아이디어를 콘텐츠로 구현하는 개인 크리에이티브 프로젝트입니다.",
                    "생성형 AI를 활용하여 새로운 콘텐츠 콘셉트를 발굴하고, 다양한 비주얼 스타일과 스토리텔링 방식을 실험합니다."
                ]
            },
            /* main-page card: still image only (replace videos/posters/concept-works-cover.jpg to change it) */
            cover: { title: "CONCEPT WORKS", poster: "videos/posters/concept-works-cover.jpg", w: 941, h: 1672, still: true },
            label: "CONCEPT WORKS",
            title: "CONCEPT WORKS",
            /* SERIES: add a new experiment by appending one object here (title, tagline, plan, note + projects/videos).
               Its works are listed under its own heading on the same page - no new page needed. */
            subgroups: [
                {
                    title: "WHAT IF..?",
                    tagline: "현실에 없는 조합, 상상에서 시작된 광고",
                    plan: "실제로 존재하지 않는 브랜드와 제품의 조합을 상상하고, 이를 가상의 제품 및 광고 콘텐츠로 구현하는 크리에이티브 프로젝트입니다.",
                    note: "실제 브랜드의 공식 협업이나 광고가 아닌 개인 창작 프로젝트입니다.",
                    projects: ["product-concept-featured", "product-concept-01", "material-motion", "new-scene", "product-concept-02"]
                },
                {
                    title: "MONEY TALK",
                    plan: "주식과 금융을 소재로, 친숙하고 직관적인 비주얼 콘텐츠로 제작하였습니다. 금융 관련 메시지를 그래픽과 모션으로 표현하며, 생성형 AI를 활용한 광고형 콘텐츠의 가능성을 탐색했습니다.",
                    videos: [
                        { title: "쏟아지는 금화", src: "videos/Final.mp4",             poster: "videos/posters/Final.jpg",             w: 720,  h: 1280 },
                        { title: "상승하는 코인", src: "videos/Final_2.mp4",           poster: "videos/posters/Final_2.jpg",           w: 720,  h: 1280 },
                        { title: "동전으로 쌓은 도시", src: "videos/finance-gold-coin.mp4", poster: "videos/posters/finance-gold-coin.jpg", w: 1080, h: 1920 },
                        { title: "미래로 향하는 거리", src: "videos/finance-premium.mp4",   poster: "videos/posters/finance-premium.jpg",   w: 1080, h: 1920 }
                    ]
                }
            ]
        }
    ],

    /* shared placeholder text (kept in one place so every project stays consistent) */
    placeholders: {
        role:   "[본인 담당 범위 입력]",
        tools:  "[사용 도구 입력]",
        kind:   "[개인 컨셉 / 클라이언트 작업 입력]",
        intent: "[이 프로젝트에서 전달하려던 메시지와 연출 방향을 입력할 예정입니다.]",
        issue:  "[초기 결과의 문제, 수정한 방법, 최종 결과의 차이를 입력할 예정입니다.]"
    },

    /* labels used in project detail view */
    labels: {
        category: "카테고리",
        kind: "구분",
        role: "역할",
        tools: "도구",
        intent: "기획 의도",
        process: "제작 과정",
        issue: "문제와 개선",
        series: "SERIES",
        back: "← AI WORKS",
        play: "영상 재생"
    },

    /* [3][4][5] projects. `videos` is the finished work (series have several). */
    projects: {

        /* ---- temporary featured work = first BRAND CONTENT video (videos/reels.mp4) ---- */
        "product-concept-featured": {
            title: "GUCCI X 마우스",
            summary: "익숙한 제품을 새로운 소재와 공간으로 재해석한 컨셉 영상입니다. 제품의 특징이 짧은 장면 안에서 드러나도록 구성했습니다.",
            category: "WHAT IF..?",
            kind: "[개인 컨셉 / 클라이언트 작업 입력]",
            role: "[본인 담당 범위 입력]",
            tools: "[사용 도구 입력]",
            videos: [
                { title: "GUCCI X 마우스", src: "videos/reels.mp4", poster: "videos/posters/reels.jpg", w: 1080, h: 1920 }
            ]
        },

        /* ---- BRAND CONTENT → product-based cards (titles are temporary) ---- */
        "product-concept-01": {
            title: "한국타이어 X 나침반",
            summary: "제품의 형태와 질감을 중심으로 구성한 AI 비주얼 실험.",
            category: "WHAT IF..?",
            videos: [
                { title: "한국타이어 X 나침반", src: "videos/Reels2.mp4", poster: "videos/posters/Reels2.jpg", w: 862, h: 1076 }
            ]
        },
        "material-motion": {
            title: "HERMÈS X 스탠드 조명",
            summary: "제품의 형태와 질감을 중심으로 구성한 AI 비주얼 실험.",
            category: "WHAT IF..?",
            videos: [
                { title: "HERMÈS X 스탠드 조명", src: "videos/Stand.mp4", poster: "videos/posters/Stand.jpg", w: 1080, h: 1350 }
            ]
        },
        "new-scene": {
            title: "TABASCO X 소화기",
            summary: "제품의 형태와 질감을 중심으로 구성한 AI 비주얼 실험.",
            category: "WHAT IF..?",
            videos: [
                { title: "TABASCO X 소화기", src: "videos/TABASCO.mp4", poster: "videos/posters/TABASCO.jpg", w: 1080, h: 1920 }
            ]
        },
        /* 4th remaining BRAND video — title is a neutral temporary one */
        "product-concept-02": {
            title: "PORSCHE X 전동 드릴",
            summary: "제품의 형태와 질감을 중심으로 구성한 AI 비주얼 실험.",
            category: "WHAT IF..?",
            videos: [
                { title: "PORSCHE X 전동 드릴", src: "videos/PORSHE.mp4", poster: "videos/posters/PORSHE.jpg", w: 1080, h: 1916 }
            ]
        },

        /* ---- JOSEON CONTENT → one series card; detail lists every video ---- */
        "joseon": {
            title: "조선 — 익숙한 것의 낯선 해석",
            summary: "전통적인 공간과 소재를 현대적인 시선으로 재구성한 AI 영상 시리즈.",
            category: "조선의 모든 것",
            series: true,
            /* first video = representative work shown on the main page.
               video order = display order */
            videos: [
                { title: "기묘한 축제",          src: "videos/gimyo-festival.mp4", poster: "videos/posters/gimyo-festival.jpg", w: 1080, h: 1920 },
                { title: "기묘한 숨바꼭질",        src: "videos/hide-and-seek.mp4",  poster: "videos/posters/hide-and-seek.jpg",  w: 1080, h: 1920 },
                { title: "인형뽑기",             src: "videos/injeong-ppopgi.mp4", poster: "videos/posters/injeong-ppopgi.jpg", w: 720,  h: 1280 },
                { title: "MIU MIU X 꽃신",       src: "videos/miumiu-kkotsin.mp4", poster: "videos/posters/miumiu-kkotsin.jpg", w: 1080, h: 1920 },
                { title: "BVLGARI X 청자",       src: "videos/bulgari.mp4",        poster: "videos/posters/bulgari.jpg",        w: 1080, h: 1920 },
                { title: "ZIPPO X 화로대",       src: "videos/zippo-hwarotae.mp4", poster: "videos/posters/zippo-hwarotae.jpg", w: 1080, h: 1920 },
                { title: "조선의 종 치는 법",     src: "videos/joseon-bell.mp4",    poster: "videos/posters/joseon-bell.jpg?v=2",    w: 720,  h: 1280 },
                { title: "기와가 쓰러지는 날",     src: "videos/joseon-domino.mp4",  poster: "videos/posters/joseon-domino.jpg?v=2",  w: 720,  h: 1280 },
                { title: "조선의 빠른 배송",      src: "videos/joseon-rocket.mp4",  poster: "videos/posters/joseon-rocket.jpg?v=2",  w: 1080, h: 1920 },
                { title: "조선의 자동판매기",     src: "videos/joseon-vending.mp4", poster: "videos/posters/joseon-vending.jpg?v=2", w: 1080, h: 1920 }
            ]
        }
    },

    /* [5] detail-view defaults applied to every project that does not override them.
       Per project you may add: kind, role, tools, intent, process (array), issue, comparison. */
    detailDefaults: {
        /* process steps are rendered in order, joined with arrows */
        process: ["컨셉 설정", "기준 이미지 제작", "영상 생성", "편집 및 사운드"]
    }
};
