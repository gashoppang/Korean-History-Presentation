type HistoryScene = {
  year: string;
  title: string;
  facility: string;
  signal: string;
  effects: string[];
  summary: string;
  impact: string;
  image: {
    src: string;
    alt: string;
    credit: string;
    href: string;
  };
};

type GalleryItem = {
  title: string;
  caption: string;
  src: string;
  credit: string;
  href: string;
};

type LensName = 'convenience' | 'pressure';

type LensCopy = {
  technology: string;
  people: string;
  time: string;
};

const historyScenes: HistoryScene[] = [
  {
    year: '1883',
    title: '박문국·기기창·전환국',
    facility: '신문·무기·화폐 제도의 출발',
    signal: '정보와 제도',
    effects: ['정보 확산', '화폐 표준화', '군사 기술'],
    summary: '신문 발간, 근대식 무기 공장, 화폐 주조 기관이 함께 등장했다.',
    impact: '정보, 군사 기술, 경제 제도가 근대적 방식으로 정비되기 시작했다.',
    image: {
      src: 'https://contents.history.go.kr/data/img/ta/ta_e32/ta_e32_1080_01.jpg',
      alt: '한성순보 창간호',
      credit: '한성순보, 우리역사넷(국사편찬위원회)',
      href: 'https://contents.history.go.kr/front/ta/view.do?levelId=ta_e32_0070_0020_0020'
    }
  },
  {
    year: '1884',
    title: '우정총국',
    facility: '근대식 우편 사무',
    signal: '우편 제도',
    effects: ['소통 제도', '국가 행정', '중단과 재개'],
    summary: '근대식 우편 사무가 도입되었지만 갑신정변 이후 약 10여 년 동안 중단되었다.',
    impact: '국가가 우편과 통신을 제도적으로 운영하려는 시도가 나타났다.',
    image: {
      src: 'https://devin.aks.ac.kr/image/5e07923c-6a47-4d74-9ffc-28a189bf3e34?preset=page',
      alt: '서울 우정총국 건물',
      credit: '서울 우정총국 정면, 한국민족문화대백과사전',
      href: 'https://encykorea.aks.ac.kr/Article/E0040100'
    }
  },
  {
    year: '1885',
    title: '광혜원',
    facility: '최초의 서양식 병원',
    signal: '서양 의학',
    effects: ['병원 공간', '선교사 의학', '치료 방식'],
    summary: '알렌의 건의로 최초의 서양식 병원이 세워지고 제중원으로 이어졌다.',
    impact: '서양 의학은 개신교 선교사들을 통해 들어오며 치료의 방식을 바꾸었다.',
    image: {
      src: 'https://contents.history.go.kr/data/img/ta/ta_e61/ta_e61_1000_01.jpg',
      alt: '광혜원 건물',
      credit: '광혜원, 우리역사넷(국사편찬위원회)',
      href: 'https://contents.history.go.kr/front/ta/view.do?levelId=ta_e61_0020_0030_0040'
    }
  },
  {
    year: '1887',
    title: '경복궁 전등',
    facility: '전기와 궁궐의 밤',
    signal: '전기 도입',
    effects: ['전기 기술', '밤의 활동', '도시 감각'],
    summary: '전기 기술 도입으로 궁궐에 최초의 전등이 설치되었다.',
    impact: '전기 기술이 궁궐과 도시 공간에 도입되는 계기가 되었다.',
    image: {
      src: 'https://www.museum.go.kr/dryplate/imagePath.do?check=E&imgFile=pan000011.jpg',
      alt: '1909년 경복궁 근정전 어계',
      credit: '경복궁 근정전 어계(1909), 국립중앙박물관',
      href: 'https://www.museum.go.kr/dryplate/searchplate_view.do?relicnum=000011'
    }
  },
  {
    year: '1899',
    title: '전차와 경인선',
    facility: '도시 전차와 첫 철도',
    signal: '교통 변화',
    effects: ['이동 속도', '도시 연결', '정시 생활'],
    summary: '서대문과 청량리를 잇는 전차가 개통되고, 경인선 철도도 운행을 시작했다.',
    impact: '사람과 물자의 이동이 이전보다 편리해지고 교통망의 중요성이 커졌다.',
    image: {
      src: 'https://contents.history.go.kr/data/img/km/km_022_big/km_022_072_01.jpg',
      alt: '경인선 귀빈 객차',
      credit: '경인선 객차-귀빈 객차, 우리역사넷(국사편찬위원회)',
      href: 'https://contents.history.go.kr/front/km/view.do?levelId=km_022_0040_0010_0030'
    }
  },
  {
    year: '1905',
    title: '경부선',
    facility: '경성에서 부산까지 이어진 철도',
    signal: '전국의 연결',
    effects: ['교통 편리', '토지 수용', '이권 침탈'],
    summary: '한반도 남북의 주요 거점을 잇는 철도가 일본에 의해 부설되었다.',
    impact: '편리함 뒤에는 이권 침탈과 강제 수용, 노역 동원이라는 갈등이 있었다.',
    image: {
      src: 'https://contents.history.go.kr/data/img/km/km_004/km_004_039_01.jpg',
      alt: '경부선 개통식',
      credit: '경부선 개통식, 우리역사넷(국사편찬위원회)',
      href: 'https://contents.history.go.kr/front/km/view.do?levelId=km_004_0030_0020_0030_0020'
    }
  },
  {
    year: '1906',
    title: '경의선',
    facility: '더 넓어진 철도망',
    signal: '철도망 확대',
    effects: ['지역 연결', '군사 이동', '지배 통로'],
    summary: '경의선 개통으로 철도망은 더 넓은 지역을 연결했다.',
    impact: '철도망은 지역을 연결했지만 군사적, 정치적 목적에도 이용되었다.',
    image: {
      src: 'https://museum.seoul.go.kr:8088/ARCHIVE_DATA/master/1011/A000000247/f86c88f2-8a29-451a-ab7b-7e8ed665089c.jpg',
      alt: '서울역사아카이브의 용산 정거장 사진',
      credit: '용산 정거장, 서울역사아카이브',
      href: 'https://museum.seoul.go.kr/archive/archiveNew/NR_archiveView.do?ctgryId=CTGRY805&currentPage=1&fileId=H-TRNS-75929-805&fileSn=300&searchVal=&subCtgryId=&type=D&upperNodeId=CTGRY805'
    }
  }
];

const gallery: GalleryItem[] = [
  {
    title: '광혜원',
    caption: '서양식 병원은 새로운 의료 기술과 병원 제도가 들어오는 계기가 되었다.',
    src: 'https://contents.history.go.kr/data/img/ta/ta_e61/ta_e61_1000_01.jpg',
    credit: '우리역사넷(국사편찬위원회)',
    href: 'https://contents.history.go.kr/front/ta/view.do?levelId=ta_e61_0020_0030_0040'
  },
  {
    title: '덕수궁 근대 건축',
    caption: '덕수궁에는 정관헌과 석조전처럼 전통과 서양식 건축 요소가 함께 나타나는 공간이 남아 있다.',
    src: 'https://www.heritage.go.kr/images/2025/contents/palace/dsg/img01.png',
    credit: '국가유산청 국가유산포털',
    href: 'https://heritage.go.kr/heri/html/HtmlPage.do?pageNo=3_1_1_0&pg=%2Fpalaces%2FpalacesDeokInfo.jsp'
  },
  {
    title: '덕수궁 석조전',
    caption: '궁궐 안에 세워진 서양식 건축물로, 당시 건축 양식의 변화를 보여 준다.',
    src: 'https://devin.aks.ac.kr/image/e71bf757-cefb-4565-b933-7ec210aba6ab?preset=page',
    credit: '한국민족문화대백과사전',
    href: 'https://encykorea.aks.ac.kr/Article/E0015365'
  }
];

const lensCopy: Record<LensName, LensCopy> = {
  convenience: {
    technology: '전등은 밤을 밝히고, 전화와 우편은 먼 곳의 소식을 더 빠르게 전달했다.',
    people: '전차와 철도는 이동 시간을 줄이며 도시 생활의 폭을 넓혔다.',
    time: '정해진 시간에 출발하고 도착하는 교통망은 시간 운영 방식에도 영향을 주었다.'
  },
  pressure: {
    technology: '일부 근대 시설은 외세가 조선을 침략하고 지배하는 수단으로도 이용되었다.',
    people: '철도 건설 과정에서 토지가 강제로 수용되고 백성들이 노역에 동원되었다.',
    time: '새로운 시간 운영 방식은 편리함을 주었지만 제도적 통제와도 연결되었다.'
  }
};

const query = <T extends Element>(selector: string, scope: ParentNode = document): T => {
  const element = scope.querySelector(selector);
  if (!element) {
    throw new Error(`Missing element: ${selector}`);
  }
  return element as T;
};

const queryAll = <T extends Element>(selector: string, scope: ParentNode = document): T[] => {
  return Array.from(scope.querySelectorAll(selector)) as T[];
};

const renderTramLine = () => {
  const tram = query<HTMLElement>('.tram-journey');
  const stops = query<HTMLElement>('.tram-stops');
  const windowStrip = query<HTMLElement>('.tram-window');
  const title = query<HTMLElement>('[data-tram-title]');
  const year = query<HTMLElement>('[data-tram-year]');
  const previous = query<HTMLButtonElement>('[data-tram-prev]');
  const next = query<HTMLButtonElement>('[data-tram-next]');
  let activeIndex = 0;

  stops.innerHTML = historyScenes
    .map(
      (event, index) => `
        <button
          class="tram-stop"
          type="button"
          data-scene-index="${index}"
          aria-label="${event.year} ${event.title}"
        >
          <span>${event.year}</span>
        </button>
      `
    )
    .join('');

  windowStrip.innerHTML = historyScenes
    .map(
      (event, index) => `
        <article class="tram-panel" data-scene-index="${index}" tabindex="0">
          <figure class="tram-photo">
            <img src="${event.image.src}" alt="${event.image.alt}" loading="${index === 0 ? 'eager' : 'lazy'}" />
            <figcaption>
              <a href="${event.image.href}" target="_blank" rel="noreferrer">${event.image.credit}</a>
            </figcaption>
          </figure>
          <div class="tram-story">
            <div class="tram-meta">
              <span>${event.year}</span>
              <span>${event.signal}</span>
            </div>
            <h3>${event.title}</h3>
            <p class="tram-facility">${event.facility}</p>
            <div class="tram-effects" aria-label="발표 강조점">
              ${event.effects.map((effect) => `<span>${effect}</span>`).join('')}
            </div>
            <p>${event.summary}</p>
            <div class="tram-impact">
              <span>사회 변화</span>
              <strong>${event.impact}</strong>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  const update = (index: number, shouldScroll = true) => {
    activeIndex = Math.min(historyScenes.length - 1, Math.max(0, index));
    const progress = activeIndex / (historyScenes.length - 1);
    const event = historyScenes[activeIndex];
    tram.style.setProperty('--tram-progress', String(progress));
    title.textContent = event.title;
    year.textContent = event.year;
    queryAll<HTMLButtonElement>('.tram-stop', stops).forEach((button, buttonIndex) => {
      const active = buttonIndex === activeIndex;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-current', active ? 'step' : 'false');
    });
    queryAll<HTMLElement>('.tram-panel', windowStrip).forEach((panel, panelIndex) => {
      const active = panelIndex === activeIndex;
      panel.classList.toggle('is-active', active);
      panel.setAttribute('aria-current', active ? 'true' : 'false');
    });
    if (shouldScroll) {
      query<HTMLElement>(`.tram-panel[data-scene-index="${activeIndex}"]`, windowStrip).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
    previous.disabled = activeIndex === 0;
    next.disabled = activeIndex === historyScenes.length - 1;
  };

  stops.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-scene-index]');
    if (!button) return;
    update(Number(button.dataset.sceneIndex || '0'));
  });
  windowStrip.addEventListener('click', (event) => {
    const panel = (event.target as HTMLElement).closest<HTMLElement>('.tram-panel');
    if (!panel) return;
    update(Number(panel.dataset.sceneIndex || '0'));
  });
  previous.addEventListener('click', () => {
    update(activeIndex - 1);
  });
  next.addEventListener('click', () => {
    update(activeIndex + 1);
  });
  windowStrip.addEventListener('scroll', () => {
    window.clearTimeout(Number(windowStrip.dataset.scrollTimer || '0'));
    const timer = window.setTimeout(() => {
      const panels = queryAll<HTMLElement>('.tram-panel', windowStrip);
      const center = windowStrip.getBoundingClientRect().left + windowStrip.clientWidth / 2;
      const closest = panels.reduce(
        (best, panel, index) => {
          const rect = panel.getBoundingClientRect();
          const distance = Math.abs(rect.left + rect.width / 2 - center);
          return distance < best.distance ? { index, distance } : best;
        },
        { index: activeIndex, distance: Number.POSITIVE_INFINITY }
      );
      update(closest.index, false);
    }, 120);
    windowStrip.dataset.scrollTimer = String(timer);
  });
  tram.addEventListener('pointermove', (event) => {
    const rect = tram.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    tram.style.setProperty('--tram-x', `${Math.round(x * 100)}%`);
    tram.style.setProperty('--tram-y', `${Math.round(y * 100)}%`);
  });
  tram.addEventListener('pointerleave', () => {
    tram.style.setProperty('--tram-x', '50%');
    tram.style.setProperty('--tram-y', '50%');
  });
  historyScenes.forEach((event) => {
    const image = new Image();
    image.src = event.image.src;
  });
  update(0);
};

const renderGallery = () => {
  query<HTMLElement>('.visual-gallery').innerHTML = gallery
    .map(
      (item, index) => `
        <figure class="history-image" style="--stack-offset:${index * 22}px">
          <img src="${item.src}" alt="${item.title}" loading="lazy" />
          <figcaption>
            <strong>${item.title}</strong>
            <span>${item.caption}</span>
            <small><a href="${item.href}" target="_blank" rel="noreferrer">${item.credit}</a></small>
          </figcaption>
        </figure>
      `
    )
    .join('');
};

const setLens = (lens: LensName) => {
  document.body.dataset.lens = lens;
  queryAll<HTMLButtonElement>('[data-lens]').forEach((button) => {
    const active = button.dataset.lens === lens;
    button.setAttribute('aria-selected', String(active));
  });

  const copy = lensCopy[lens];
  Object.entries(copy).forEach(([key, value]) => {
    query<HTMLElement>(`[data-lens-copy="${key}"]`).textContent = value;
  });
};

const setupLens = () => {
  queryAll<HTMLButtonElement>('[data-lens]').forEach((button) => {
    button.addEventListener('click', () => setLens(button.dataset.lens as LensName));
  });
  setLens('convenience');
};

const setupReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.18 }
  );

  queryAll<HTMLElement>('[data-reveal], .history-image, .lens-card').forEach((element) => {
    observer.observe(element);
  });
};

const setupProgress = () => {
  const bar = query<HTMLElement>('.progress-bar');
  const sections = queryAll<HTMLElement>('.chapter');

  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    bar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;

    const active = sections.reduce((current, section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= window.innerHeight * 0.46 ? section : current;
    }, sections[0]);

    const id = active.id;
    queryAll<HTMLButtonElement>('[data-jump]').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.jump === `#${id}`);
    });
  };

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
};

const setupNavigation = () => {
  const sections = queryAll<HTMLElement>('.chapter');

  queryAll<HTMLButtonElement>('[data-jump]').forEach((button) => {
    button.addEventListener('click', () => {
      query<HTMLElement>(button.dataset.jump || '#intro').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const move = (direction: number) => {
    const currentIndex = sections.findIndex((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= window.innerHeight * 0.48 && rect.bottom > window.innerHeight * 0.25;
    });
    const nextIndex = Math.min(sections.length - 1, Math.max(0, currentIndex + direction));
    sections[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  query<HTMLButtonElement>('[data-presenter="prev"]').addEventListener('click', () => move(-1));
  query<HTMLButtonElement>('[data-presenter="next"]').addEventListener('click', () => move(1));

  window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'PageDown') {
      move(1);
    }
    if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
      move(-1);
    }
  });
};

const setupParallax = () => {
  const update = () => {
    const shift = Math.round(window.scrollY * -0.025);
    document.documentElement.style.setProperty('--image-shift', `${shift}px`);
  };

  window.addEventListener('scroll', update, { passive: true });
  update();
};

renderTramLine();
renderGallery();
setupLens();
setupReveal();
setupProgress();
setupNavigation();
setupParallax();
