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
       - `title` / `tagline` / `desc`: group heading, one-line subtitle, paragraph
       - `projects` (project ids) or `series` / `videos`: works, played in place
         (first = representative)
       To change the representative work, move its id/video to the front. */
    groups: [
        {
            /* new Joseon character series. tagline / desc not written yet -> add them here when ready */
            key: "beomdoryeong",
            label: "범도령",
            title: "범도령",
            videos: [
                { title: "범도령", src: "videos/beomdoryeong.mp4", poster: "videos/posters/beomdoryeong.jpg", w: 720, h: 1280 },
                { title: "나무",   src: "videos/beom-tree.mp4",    poster: "videos/posters/beom-tree.jpg",    w: 720, h: 1280 },
                { title: "낚시",   src: "videos/beom-fishing.mp4", poster: "videos/posters/beom-fishing.jpg", w: 720, h: 1280 },
                { title: "떡 하나", src: "videos/beom-tteok.mp4",  poster: "videos/posters/beom-tteok.jpg",   w: 720, h: 1280 },
                { title: "축제",   src: "videos/beom-festival.mp4", poster: "videos/posters/beom-festival.jpg", w: 720, h: 1280 }
            ]
        },
        {
            /* UNKL character content. tagline / desc not written yet -> add them here when ready */
            key: "unkl",
            label: "UNKL",
            title: "UNKL",
            videos: [
                { title: "히어로", src: "videos/unkl-hero.mp4",      poster: "videos/posters/unkl-hero.jpg",      w: 1080, h: 1920 },
                { title: "볼링",   src: "videos/unkl-bowling.mp4",   poster: "videos/posters/unkl-bowling.jpg",   w: 960, h: 1728 },
                { title: "다이빙", src: "videos/unkl-diving.mp4",    poster: "videos/posters/unkl-diving.jpg",    w: 960, h: 1728 },
                { title: "할로윈", src: "videos/unkl-halloween.mp4", poster: "videos/posters/unkl-halloween.jpg", w: 960, h: 1728 },
                { title: "ZERO DAMAGE", src: "videos/unkl-zero-damage.mp4", poster: "videos/posters/unkl-zero-damage.jpg", w: 864, h: 1536 }
            ]
        },
        {
            key: "joseon-archive",
            label: "JOSEON ARCHIVE",
            title: "JOSEON ARCHIVE",
            tagline: "과거에 없던 조선",
            desc: "오늘의 브랜드와 놀이 문화가 조선에 존재했다면? 전통적인 공간과 공예에 현대적인 상상을 더해, 익숙하면서도 낯선 조선의 풍경을 AI 영상으로 구현한 컨셉 시리즈입니다.",
            series: "joseon"
        },
        {
            key: "what-if",
            label: "WHAT IF ~",   /* copy shown above the video */
            title: "WHAT IF",
            tagline: "브랜드의 새로운 가능성",
            desc: "만약 익숙한 브랜드가 전혀 다른 제품을 만든다면? 브랜드를 상징하는 색, 소재, 형태를 새로운 제품에 적용하고, 그럴듯하지만 존재하지 않는 제품의 모습을 AI 영상으로 구현한 컨셉 시리즈입니다.",
            projects: ["product-concept-featured", "product-concept-01", "material-motion", "new-scene", "product-concept-02"]
        },
        {
            key: "stock",
            label: "STOCK",
            title: "STOCK",
            tagline: "개념을 장면으로",
            desc: "금융과 기술, 도시의 일상처럼 다양한 콘텐츠에 활용할 수 있는 주제를 시각화했습니다. 추상적인 개념을 직관적인 이미지와 움직임으로 풀어낸 AI 스톡 영상 시리즈입니다.",
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
                { title: "기묘한 축제",          src: "videos/gimyo-festival.mp4", poster: "videos/posters/gimyo-festival.jpg", w: 1080, h: 1920 },
                { title: "기묘한 숨바꼭질",        src: "videos/hide-and-seek.mp4",  poster: "videos/posters/hide-and-seek.jpg",  w: 1080, h: 1920 },
                { title: "인형뽑기",             src: "videos/injeong-ppopgi.mp4", poster: "videos/posters/injeong-ppopgi.jpg", w: 720,  h: 1280 },
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
