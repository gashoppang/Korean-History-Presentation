                      
               
                
                  
                 
  

                 
                
                
               
                 
  

                    
                
                  
              
                 
  

                                           

                 
                     
                 
               
  

const timeline                  = [
  {
    year: '1883',
    title: '박문국·기기창·전환국',
    summary: '신문 발간, 근대식 무기 공장, 화폐 주조 기관이 함께 등장했다.',
    impact: '정보, 군사 기술, 경제 제도가 근대적 방식으로 정비되기 시작했다.'
  },
  {
    year: '1884',
    title: '우정총국',
    summary: '근대식 우편 사무가 도입되었지만 갑신정변 이후 약 10여 년 동안 중단되었다.',
    impact: '소식이 제도와 속도의 문제로 바뀌는 출발점이었다.'
  },
  {
    year: '1885',
    title: '광혜원',
    summary: '알렌의 건의로 최초의 서양식 병원이 세워지고 제중원으로 이어졌다.',
    impact: '서양 의학은 개신교 선교사들을 통해 들어오며 치료의 방식을 바꾸었다.'
  },
  {
    year: '1887',
    title: '경복궁 전등',
    summary: '전기 기술 도입으로 궁궐에 최초의 전등이 설치되었다.',
    impact: '밤에도 활동할 수 있는 공간이 생기며 도시의 시간 감각이 확장되었다.'
  },
  {
    year: '1899',
    title: '전차와 경인선',
    summary: '서대문과 청량리를 잇는 전차가 개통되고, 경인선 철도도 운행을 시작했다.',
    impact: '사람과 물자의 이동 속도가 빨라지고 정시 출발이라는 시간 감각이 퍼졌다.'
  },
  {
    year: '1905',
    title: '경부선',
    summary: '한반도 남북의 주요 거점을 잇는 철도가 일본에 의해 부설되었다.',
    impact: '편리함 뒤에는 이권 침탈과 강제 수용, 노역 동원이라는 갈등이 있었다.'
  },
  {
    year: '1906',
    title: '경의선',
    summary: '경의선 개통으로 철도망은 더 넓은 지역을 연결했다.',
    impact: '근대적 연결망은 생활을 바꾸는 동시에 제국주의적 지배의 통로가 되기도 했다.'
  }
];

const facilities             = [
  {
    title: '박문국',
    label: '신문',
    body: '인쇄와 신문 발간은 소식이 더 넓고 빠르게 퍼지는 사회를 만들었다.',
    accent: '#b6412e'
  },
  {
    title: '전환국',
    label: '화폐',
    body: '화폐 주조 기관은 경제 질서를 근대적 제도로 정비하려는 움직임이었다.',
    accent: '#c28b2c'
  },
  {
    title: '우정총국',
    label: '우편',
    body: '편지와 공문은 개인의 소식이자 국가 운영의 속도를 바꾸는 매체가 되었다.',
    accent: '#126b66'
  },
  {
    title: '광혜원',
    label: '의학',
    body: '서양 의학과 병원은 몸을 치료하는 방식 자체를 새롭게 보여 주었다.',
    accent: '#7b4e9f'
  },
  {
    title: '전등·전화',
    label: '전기',
    body: '불빛과 목소리가 거리를 건너며 밤과 소통의 경계가 달라졌다.',
    accent: '#d18b2f'
  },
  {
    title: '전차·철도',
    label: '이동',
    body: '정시에 움직이는 교통망은 이동의 편리함과 표준 시간의 필요를 동시에 만들었다.',
    accent: '#2b5f75'
  }
];

const gallery                = [
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

const lensCopy                             = {
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

const sectionTitles = new Map                ([
  ['intro', '도입'],
  ['timeline', '연표'],
  ['network', '근대 시설'],
  ['life', '의식주 변화'],
  ['tension', '양면성'],
  ['closing', '결론']
]);

const query =                    (selector        , scope             = document)    => {
  const element = scope.querySelector(selector);
  if (!element) {
    throw new Error(`Missing element: ${selector}`);
  }
  return element     ;
};

const queryAll =                    (selector        , scope             = document)      => {
  return Array.from(scope.querySelectorAll(selector))       ;
};

const renderTimeline = () => {
  const list = query             ('.timeline-events');
  const card = query             ('.year-card');
  const scrubber = query                  ('#year-scrubber');

  list.innerHTML = timeline
    .map(
      (event, index) => `
        <button class="timeline-dot" type="button" data-year-index="${index}" aria-label="${event.year} ${event.title}">
          <span>${event.year}</span>
          <strong>${event.title}</strong>
        </button>
      `
    )
    .join('');

  const update = (index        ) => {
    const event = timeline[index];
    scrubber.value = String(index);
    document.documentElement.style.setProperty('--timeline-progress', `${index / (timeline.length - 1)}`);
    queryAll                   ('.timeline-dot', list).forEach((button, buttonIndex) => {
      button.classList.toggle('is-active', buttonIndex === index);
    });
    card.innerHTML = `
      <span class="year-chip">${event.year}</span>
      <h3>${event.title}</h3>
      <p>${event.summary}</p>
      <strong>${event.impact}</strong>
    `;
  };

  list.addEventListener('click', (event) => {
    const button = (event.target               ).closest                   ('[data-year-index]');
    if (!button) return;
    update(Number(button.dataset.yearIndex || '0'));
  });

  scrubber.addEventListener('input', () => update(Number(scrubber.value)));
  update(0);
};

const renderFacilities = () => {
  query             ('.facility-grid').innerHTML = facilities
    .map(
      (facility) => `
        <article class="facility-card" style="--accent:${facility.accent}">
          <span>${facility.label}</span>
          <h3>${facility.title}</h3>
          <p>${facility.body}</p>
        </article>
      `
    )
    .join('');
};

const renderGallery = () => {
  query             ('.visual-gallery').innerHTML = gallery
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

const setLens = (lens          ) => {
  document.body.dataset.lens = lens;
  queryAll                   ('[data-lens]').forEach((button) => {
    const active = button.dataset.lens === lens;
    button.setAttribute('aria-selected', String(active));
  });

  const copy = lensCopy[lens];
  Object.entries(copy).forEach(([key, value]) => {
    query             (`[data-lens-copy="${key}"]`).textContent = value;
  });
};

const setupLens = () => {
  queryAll                   ('[data-lens]').forEach((button) => {
    button.addEventListener('click', () => setLens(button.dataset.lens            ));
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

  queryAll             ('[data-reveal], .facility-card, .history-image, .lens-card').forEach((element) => {
    observer.observe(element);
  });
};

const setupProgress = () => {
  const bar = query             ('.progress-bar');
  const sections = queryAll             ('.chapter');
  const dockTitle = query             ('[data-current-section]');
  const dockCue = query             ('[data-current-cue]');

  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    bar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;

    const active = sections.reduce((current, section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= window.innerHeight * 0.46 ? section : current;
    }, sections[0]);

    const id = active.id;
    dockTitle.textContent = sectionTitles.get(id) || '발표';
    dockCue.textContent = active.dataset.cue || '';
    queryAll                   ('[data-jump]').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.jump === `#${id}`);
    });
  };

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
};

const setupNavigation = () => {
  const sections = queryAll             ('.chapter');

  queryAll                   ('[data-jump]').forEach((button) => {
    button.addEventListener('click', () => {
      query             (button.dataset.jump || '#intro').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const move = (direction        ) => {
    const currentIndex = sections.findIndex((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= window.innerHeight * 0.48 && rect.bottom > window.innerHeight * 0.25;
    });
    const nextIndex = Math.min(sections.length - 1, Math.max(0, currentIndex + direction));
    sections[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  query                   ('[data-presenter="prev"]').addEventListener('click', () => move(-1));
  query                   ('[data-presenter="next"]').addEventListener('click', () => move(1));

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

renderTimeline();
renderFacilities();
renderGallery();
setupLens();
setupReveal();
setupProgress();
setupNavigation();
setupParallax();
