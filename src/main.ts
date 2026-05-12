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
      src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Hanseong_Sunbo.jpg?width=900',
      alt: '한성순보 창간호',
      credit: '한성순보 창간호, Wikimedia Commons',
      href: 'https://commons.wikimedia.org/wiki/File:Hanseong_Sunbo.jpg'
    }
  },
  {
    year: '1884',
    title: '우정총국',
    facility: '근대식 우편 사무',
    signal: '소식의 속도',
    effects: ['소통 제도', '국가 행정', '중단과 재개'],
    summary: '근대식 우편 사무가 도입되었지만 갑신정변 이후 약 10여 년 동안 중단되었다.',
    impact: '소식이 제도와 속도의 문제로 바뀌는 출발점이었다.',
    image: {
      src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Central%20Post%20Office%20building%2C%20Seoul%2C%201893%20%281%29%20%2826259287247%29.jpg?width=1100',
      alt: '서울 우정총국 건물',
      credit: '우정총국 건물, Wikimedia Commons',
      href: 'https://commons.wikimedia.org/wiki/Category:Ujeongchongguk'
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
      src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Gwanghyewon.jpg?width=1000',
      alt: '광혜원 건물',
      credit: '광혜원, Wikimedia Commons',
      href: 'https://commons.wikimedia.org/wiki/File:Gwanghyewon.jpg'
    }
  },
  {
    year: '1887',
    title: '경복궁 전등',
    facility: '전기와 궁궐의 밤',
    signal: '밤의 확장',
    effects: ['전기 기술', '밤의 활동', '도시 감각'],
    summary: '전기 기술 도입으로 궁궐에 최초의 전등이 설치되었다.',
    impact: '밤에도 활동할 수 있는 공간이 생기며 도시의 시간 감각이 확장되었다.',
    image: {
      src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Gyeongbokgung_1906_1.jpg?width=1100',
      alt: '1906년 경복궁 전경',
      credit: '경복궁 1906, Wikimedia Commons',
      href: 'https://commons.wikimedia.org/wiki/File:Gyeongbokgung_1906_1.jpg'
    }
  },
  {
    year: '1899',
    title: '전차와 경인선',
    facility: '도시 전차와 첫 철도',
    signal: '움직이는 도시',
    effects: ['이동 속도', '도시 연결', '정시 생활'],
    summary: '서대문과 청량리를 잇는 전차가 개통되고, 경인선 철도도 운행을 시작했다.',
    impact: '사람과 물자의 이동 속도가 빨라지고 정시 출발이라는 시간 감각이 퍼졌다.',
    image: {
      src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Opening_of_the_Trams_in_Seoul_(1899).png?width=1100',
      alt: '1899년 서울 전차 개통 장면',
      credit: '서울 전차 개통, 서울역사박물관 / Wikimedia Commons',
      href: 'https://commons.wikimedia.org/wiki/File:Opening_of_the_Trams_in_Seoul_(1899).png'
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
      src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Formal_Opening_Inside_Of_Gyeongbu_Train.png?width=1100',
      alt: '경부철도 개통식 내부 장면',
      credit: '경부철도 개통식, Wikimedia Commons',
      href: 'https://commons.wikimedia.org/wiki/File:Formal_Opening_Inside_Of_Gyeongbu_Train.png'
    }
  },
  {
    year: '1906',
    title: '경의선',
    facility: '더 넓어진 철도망',
    signal: '철도망 확대',
    effects: ['공간 압축', '군사 이동', '지배 통로'],
    summary: '경의선 개통으로 철도망은 더 넓은 지역을 연결했다.',
    impact: '근대적 연결망은 생활을 바꾸는 동시에 제국주의적 지배의 통로가 되기도 했다.',
    image: {
      src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/1906년의_용산역.jpg?width=1100',
      alt: '1906년 무렵 용산역',
      credit: '1906년 용산역, 서울역사아카이브 / Wikimedia Commons',
      href: 'https://commons.wikimedia.org/wiki/File:1906%EB%85%84%EC%9D%98_%EC%9A%A9%EC%82%B0%EC%97%AD.jpg'
    }
  }
];

const gallery: GalleryItem[] = [
  {
    title: '광혜원',
    caption: '서양식 병원은 치료를 집과 의원의 문제에서 제도화된 의료 공간으로 옮겨 놓았다.',
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Gwanghyewon.jpg?width=1000',
    credit: 'Wikimedia Commons'
  },
  {
    title: '정관헌',
    caption: '고종이 외교 사절을 맞이하고 다과와 음악을 즐기던 근대 건축의 상징적 공간이다.',
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Deoksugung-jeonggwanheon.jpg?width=1000',
    credit: 'Kimhs5400, CC BY-SA 4.0'
  },
  {
    title: '덕수궁 석조전',
    caption: '당대 최대 규모의 서양식 건축물로, 궁궐 안에 들어온 새로운 공간 감각을 보여 준다.',
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Seokjojeon.jpg?width=1000',
    credit: 'Kimhs5400, CC BY-SA 4.0'
  }
];

const lensCopy: Record<LensName, LensCopy> = {
  convenience: {
    technology: '전등은 밤을 밝히고, 전화와 우편은 먼 곳의 소식을 더 빠르게 전달했다.',
    people: '전차와 철도는 이동 시간을 줄이며 도시 생활의 폭을 넓혔다.',
    time: '정해진 시간에 출발하고 도착하는 교통망은 표준 시간과 공중 시계의 필요를 키웠다.'
  },
  pressure: {
    technology: '일부 근대 시설은 외세가 조선을 침략하고 지배하는 수단으로도 이용되었다.',
    people: '철도 건설 과정에서 토지가 강제로 수용되고 백성들이 노역에 동원되었다.',
    time: '근대적 시간 질서는 편리했지만, 사람들을 새로운 제도와 통제의 리듬에 맞추게 했다.'
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
              <span>장면 ${String(index + 1).padStart(2, '0')}</span>
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
            <small>${item.credit}</small>
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
