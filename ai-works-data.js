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

    /* [2][3][4] page groups, shown left to right (order = display order).
       Each group shows ONE representative work; "Read More" opens a page with all of them
       (#/ai-creator/more/<key>).
       - `label` (project name), `subtitle`, `category`, `kind` (video type), `desc` (intro paragraph)
       - `projects` (project ids) or `series` / `videos`: works, played in place
         (first = representative)
       To change the representative work, move its id/video to the front. */
    groups: [
        {
            key: "beomdoryeong",
            label: "BEOM DORYEONG",
            title: "BEOM DORYEONG",
            subtitle: "조선 호랑이 캐릭터 IP",
            category: "CHARACTER IP",
            kind: "AI 애니메이션",
            desc: "조선시대를 배경으로 근엄하지만 어딘가 엉뚱한 호랑이 캐릭터 '범도령'의 일상을 담은 AI 애니메이션 시리즈입니다. 캐릭터의 성격과 세계관을 바탕으로 짧고 유쾌한 이야기를 기획하고 제작합니다.",
            videos: [
                { title: "범도령 납시오", src: "videos/beomdoryeong.mp4", poster: "videos/posters/beomdoryeong.jpg", w: 720, h: 1280 },
                { title: "나무",   src: "videos/beom-tree.mp4",    poster: "videos/posters/beom-tree.jpg",    w: 720, h: 1280 },
                { title: "낚시",   src: "videos/beom-fishing.mp4", poster: "videos/posters/beom-fishing.jpg", w: 720, h: 1280 },
                { title: "떡 하나", src: "videos/beom-tteok.mp4",  poster: "videos/posters/beom-tteok.jpg",   w: 720, h: 1280 },
                { title: "축제",   src: "videos/beom-festival.mp4", poster: "videos/posters/beom-festival.jpg", w: 720, h: 1280 },
                { title: "강아지", src: "videos/beom-puppy.mp4",    poster: "videos/posters/beom-puppy.jpg",    w: 720, h: 1280 },
                { title: "대장간", src: "videos/beom-forge.mp4",    poster: "videos/posters/beom-forge.jpg",    w: 720, h: 1280 }
            ]
        },
        {
            key: "unkl",
            label: "UNKL & ANTY",
            title: "UNKL & ANTY",
            subtitle: "오리지널 캐릭터 애니메이션",
            category: "CHARACTER IP",
            kind: "숏폼 애니메이션",
            desc: "서로 다른 개성을 가진 두 캐릭터가 일상 속에서 벌이는 엉뚱한 상황을 담은 숏폼 애니메이션 시리즈입니다. 캐릭터 디자인부터 상황 설정, 코믹한 움직임과 반전까지 짧은 영상 안에 이야기를 구성합니다.",
            /* ep = episode number shown before the video type. ZERO DAMAGE / FINAL have no confirmed episode title yet (EP.09 "사탕 도둑" not matched) */
            videos: [
                { ep: "EP.01", title: "영웅의 조건",     src: "videos/unkl-hero.mp4",      poster: "videos/posters/unkl-hero.jpg",      w: 1080, h: 1920 },
                { ep: "EP.02", title: "완벽한 스트라이크", src: "videos/unkl-bowling.mp4",   poster: "videos/posters/unkl-bowling.jpg",   w: 960, h: 1728 },
                { ep: "EP.03", title: "무모한 다이빙",   src: "videos/unkl-diving.mp4",    poster: "videos/posters/unkl-diving.jpg",    w: 960, h: 1728 },
                { ep: "EP.04", title: "진짜 귀신",       src: "videos/unkl-halloween.mp4", poster: "videos/posters/unkl-halloween.jpg", w: 960, h: 1728 },
                { title: "ZERO DAMAGE", src: "videos/unkl-zero-damage.mp4", poster: "videos/posters/unkl-zero-damage.jpg", w: 864, h: 1536 },
                { title: "FINAL", src: "videos/unkl-final.mp4", poster: "videos/posters/unkl-final.jpg", w: 864, h: 1536 }
            ]
        },
        {
            key: "joseon-archive",
            label: "JOSEON ARCHIVE",
            title: "JOSEON ARCHIVE",
            subtitle: "조선시대 상상 콘텐츠",
            category: "CREATIVE STORYTELLING",
            kind: "AI 영상",
            desc: "현대의 익숙한 제품과 문화를 조선시대에 존재했다면 어땠을지 상상하며 재해석한 AI 콘텐츠 시리즈입니다. 전통적인 소재와 제작 방식을 활용하면서 원래의 기능을 유지하는 방식으로 새로운 비주얼과 이야기를 구현합니다.",
            series: "joseon"
        },
        {
            key: "what-if",
            label: "WHAT IF?",
            title: "WHAT IF?",
            subtitle: "가상 제품 및 브랜드 비주얼",
            category: "CONCEPT VISUAL",
            kind: "AI 영상",
            desc: "익숙한 브랜드와 제품을 새로운 컨셉으로 재해석하는 AI 비주얼 프로젝트입니다. 가상의 제품 디자인과 브랜드 표현 방식을 실험하며, 아이디어를 이미지와 영상 콘텐츠로 구체화합니다.",
            projects: ["product-concept-featured", "product-concept-01", "material-motion", "new-scene", "product-concept-02"]
        },
        {
            key: "stock",
            label: "STOCK",
            title: "STOCK",
            subtitle: "AI 비주얼 실험",
            category: "VISUAL EXPERIMENT",
            kind: "AI 영상",
            desc: "다양한 소재와 표현 방식을 활용한 AI 이미지·영상 비주얼 실험입니다. 컨셉에 맞는 구도와 질감, 움직임을 탐색하며 생성형 AI를 활용한 시각적 표현 가능성을 확장합니다.",
            videos: [
                { title: "쏟아지는 금화", src: "videos/Final.mp4",             poster: "videos/posters/Final.jpg",             w: 720,  h: 1280 },
                { title: "상승하는 코인", src: "videos/Final_2.mp4",           poster: "videos/posters/Final_2.jpg",           w: 720,  h: 1280 },
                { title: "동전으로 쌓은 도시", src: "videos/finance-gold-coin.mp4", poster: "videos/posters/finance-gold-coin.jpg", w: 1080, h: 1920 },
                { title: "미래로 향하는 거리", src: "videos/finance-premium.mp4",   poster: "videos/posters/finance-premium.jpg",   w: 1080, h: 1920 }
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
            category: "WHAT IF",
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
            category: "WHAT IF",
            videos: [
                { title: "한국타이어 X 나침반", src: "videos/Reels2.mp4", poster: "videos/posters/Reels2.jpg", w: 862, h: 1076 }
            ]
        },
        "material-motion": {
            title: "HERMÈS X 스탠드 조명",
            summary: "제품의 형태와 질감을 중심으로 구성한 AI 비주얼 실험.",
            category: "WHAT IF",
            videos: [
                { title: "HERMÈS X 스탠드 조명", src: "videos/Stand.mp4", poster: "videos/posters/Stand.jpg", w: 1080, h: 1350 }
            ]
        },
        "new-scene": {
            title: "TABASCO X 소화기",
            summary: "제품의 형태와 질감을 중심으로 구성한 AI 비주얼 실험.",
            category: "WHAT IF",
            videos: [
                { title: "TABASCO X 소화기", src: "videos/TABASCO.mp4", poster: "videos/posters/TABASCO.jpg", w: 1080, h: 1920 }
            ]
        },
        /* 4th remaining BRAND video — title is a neutral temporary one */
        "product-concept-02": {
            title: "PORSCHE X 전동 드릴",
            summary: "제품의 형태와 질감을 중심으로 구성한 AI 비주얼 실험.",
            category: "WHAT IF",
            videos: [
                { title: "PORSCHE X 전동 드릴", src: "videos/PORSHE.mp4", poster: "videos/posters/PORSHE.jpg", w: 1080, h: 1916 }
            ]
        },

        /* ---- JOSEON CONTENT → one series card; detail lists every video ---- */
        "joseon": {
            title: "조선 — 익숙한 것의 낯선 해석",
            summary: "전통적인 공간과 소재를 현대적인 시선으로 재구성한 AI 영상 시리즈.",
            category: "JOSEON ARCHIVE",
            series: true,
            /* first video = representative work shown on the main page.
               video order = display order */
            videos: [
                { title: "조선의 기묘한 축제",   src: "videos/gimyo-festival.mp4", poster: "videos/posters/gimyo-festival.jpg", w: 1080, h: 1920 },
                { title: "기묘한 숨바꼭질",        src: "videos/hide-and-seek.mp4",  poster: "videos/posters/hide-and-seek.jpg",  w: 1080, h: 1920 },
                { title: "조선의 인형뽑기",      src: "videos/injeong-ppopgi.mp4", poster: "videos/posters/injeong-ppopgi.jpg", w: 720,  h: 1280 },
                { title: "MIU MIU X 꽃신",       src: "videos/miumiu-kkotsin.mp4", poster: "videos/posters/miumiu-kkotsin.jpg", w: 1080, h: 1920 },
                { title: "BVLGARI X 청자",       src: "videos/bulgari.mp4",        poster: "videos/posters/bulgari.jpg",        w: 1080, h: 1920 },
                { title: "ZIPPO X 화로대",       src: "videos/zippo-hwarotae.mp4", poster: "videos/posters/zippo-hwarotae.jpg", w: 1080, h: 1920 }
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
