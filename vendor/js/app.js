const intro = "Hyun_w00k is a Full-stack software programmer who is learning continous, and loves to learn, to teach._";

let introIndex = 0;

let showUnderbar = false;
let switchTick = 0;

let showLinks = false;
let linksOpacity = 0;

const introArea = document.querySelector("#intro_h");
const linkArea = document.querySelector(".link");
const activitiesArea = document.querySelector(".card-list");

const activityColors = ["red", "cyan", "green", "yellow"];

const activitiesData = [
  {
    title: "My Portfolio",
    content: `대구소프트웨어고등학교 2학년 2학기 웹프로그래밍 프로젝트
    
    타 사이트의 디자인을 참고하여 포트폴리오를 만들어보는 프로젝트입니다.
    
    https://designchallenge.xyz 사이트를 참고하여 현재 보고 있는 페이지를 제작했습니다.
    
    Pure HTML/CSS/JS`,
    link: null
  },
  {
    title: "GimbapHeaven",
    content: `대구소프트웨어고등학교 2학년 2학기 C# 프로젝트
    
    음식점에 많이 보급되어 있는 POS 기기 내부 프로그램을 C#으로 제작하는 프로젝트입니다.
    
    C#(WPF)`,
    link: "https://github.com/hw0k/gimbapheaven_client"
  },
  {
    title: "데리다",
    content: `대구소프트웨어고등학교 나르샤 프로젝트

    구직자와 기업을 간단하게 매칭시켜주는 웹 서비스입니다.
    
    다양한 검색 조건으로 서로를 검색할 수 있고, 몇 장의 서류를 프로필로 대체하면서 편하게 구인구직을 하는 기능들을 제공할 예정입니다.
    
    이 프로젝트에서 Technical Officer, Full-Stack Developer 역할을 맡아 수행중입니다.
    
    카카오, 네이버, 구글 OAuth
    HTML&CSS / JavaScript / jQuery / Bootstrap / PHP(CodeIgniter 3)`,
    link: null
  },
  {
    title: "Flipped Learning Support System",
    content: `외주 프로젝트

    요즘들어 교육계에서 성행하고 있는 거꾸로 수업을 조금 더 원활하게 할 수 있도록 도와주는 웹 서비스입니다.
    
    수업에 대한 설계를 하고 그 수업 이전 혹은 이후 평가를 하여 통계를 내서 분석하기까지, 하나의 수업에서 온라인으로 도움을 줄 수 있는 것들을 제공합니다.
    
    이 프로젝트에서 PM(Project Manager), Technical Officer, Full-Stack Engineer, Code Assistant 역할을 맡아 수행했습니다.
    
    클래스팅 OAuth와 REST API 사용
    HTML&CSS / JavaScript(ES6) / PHP(Lumen) / Vue.js 2 / MariaDB`,
    link: "https://github.com/DGSW-FLUT"
  },
  {
    title: "Vuevent",
    content: `개인 프로젝트

    Vue.js를 사용할 때 이벤트 버스를 조금 더 편하게 사용할 수 있도록 하는 플러그인입니다.`,
    link: "https://github.com/hw0k/vuevent"
  },
  {
    title: "Tutto Note",
    content: `대구소프트웨어고등학교 나르샤 프로젝트

    기존의 노트를 사용하던 중 불편함을 느껴, 새로운 노트 플랫폼을 만들게 되었습니다.
    
    계정 기능으로 노트를 어느 기기에서나 볼 수 있고, 검색 기능으로 노트를 편리하게 찾을 수 있으며, 팝업 기능으로 노트를 Sticky Notes 처럼 팝업 형태로 띄울 수 있습니다.
    
    조수연 멘토님 아래, 이 프로젝트에서 PM(Project Manager), Technical Officer, Full-Stack Engineer, Code Assistant, Server Manager 역할을 맡아 수행했습니다.
    
    HTML&CSS / JavaScript(ES6) / Node.js / Vue.js 2 / NW.js / MongoDB`,
    link: "https://github.com/anbakkmanim/Tutto_Note"
  }
];

const activity = (title, content, link) => {
  let dom = document.createElement("article");
  dom.classList.add("card");
  dom.classList.add("box");

  let header = document.createElement("h2");
  header.innerText = title;
  dom.appendChild(header);

  let p = document.createElement("p");
  p.innerText = content;
  dom.appendChild(p);

  let a = document.createElement("a");
  a.innerText = "View more >>";
  if (link != null) {
    a.setAttribute("href", link);
    a.setAttribute("target", "_blank");
  }
  else {
    a.setAttribute("href", "#");
    a.setAttribute("onclick", `alert("볼 수 있는 링크가 존재하지 않습니다.")`);
  }
  dom.appendChild(a);

  return dom;
};

window.onload = () => {
  setInterval(loadIntro, 50);
  loadActivites();
};

const loadIntro = () => {
  let currentText = "";
  if (introIndex != intro.length) {
    currentText = intro.slice(0, introIndex++);
  }
  else {
    showLinks = true;
    currentText = showUnderbar ? intro : intro.slice(0, intro.length - 1);
    switchTick++;
    if (switchTick == 8) {
      showUnderbar = !showUnderbar;
      switchTick = 0;
    }
    if (linksOpacity <= 25) {
      linksOpacity++;
    }
  }
  introArea.innerHTML = currentText;
  linkArea.style.opacity = `${linksOpacity / 25.0}`;
};

const loadActivites = () => {
  activitiesData.forEach(el => {
    activitiesArea.appendChild(activity(el.title, el.content, el.link));
  });
};