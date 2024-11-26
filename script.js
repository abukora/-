// التحكم في التبويبات
const tabs = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // إزالة الحالة النشطة عن كل التبويبات والمحتوى
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active"));

    // تفعيل التبويب والمحتوى المطلوب
    tab.classList.add("active");
    const target = tab.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});

// بيانات الفيديو والصوتيات والسلاسل
const content = {
  videos: [
    { id: "dQw4w9WgXcQ", title: "عنوان الفيديو الأول" },
    { id: "M7lc1UVf-VE", title: "عنوان الفيديو الثاني" },
    { id: "3fumBcKC6RE", title: "عنوان الفيديو الثالث" },
  ],
  audio: [
    { id: "audio1", title: "صوتية 1" },
    { id: "audio2", title: "صوتية 2" },
    { id: "audio3", title: "صوتية 3" },
  ],
  series: [
    { id: "series1", title: "سلسلة 1" },
    { id: "series2", title: "سلسلة 2" },
    { id: "series3", title: "سلسلة 3" },
  ],
  sermons: [
    { id: "sermon1", title: "موعظة 1" },
    { id: "sermon2", title: "موعظة 2" },
    { id: "sermon3", title: "موعظة 3" },
  ],
  tajweed: [
    { id: "tajweed1", title: "تجويد 1" },
    { id: "tajweed2", title: "تجويد 2" },
    { id: "tajweed3", title: "تجويد 3" },
  ],
  news: [
    { id: "news1", title: "خبر 1" },
    { id: "news2", title: "خبر 2" },
    { id: "news3", title: "خبر 3" },
  ]
};

// إضافة المحتوى إلى الأقسام
function loadContent(section) {
  const container = document.querySelector(`#${section} .${section}-container`);
  container.innerHTML = '';
  content[section].forEach(item => {
    const contentHtml = `
      <div>
        <iframe src="https://www.youtube.com/embed/${item.id}" frameborder="0" allowfullscreen></iframe>
        <p>${item.title}</p>
      </div>
    `;
    container.innerHTML += contentHtml;
  });
}

// تحميل المحتوى الافتراضي
loadContent("videos");

// التحكم في الفيديو التالي والسابق
let currentVideoIndex = 0;

function showVideo(index) {
  const currentContent = content.videos[index];
  document.querySelector(".video-container").innerHTML = `
    <iframe src="https://www.youtube.com/embed/${currentContent.id}" frameborder="0" allowfullscreen></iframe>
    <p>${currentContent.title}</p>
  `;
}

// التالي والسابق
document.querySelector(".next-video").addEventListener("click", () => {
  if (currentVideoIndex < content.videos.length - 1) {
    currentVideoIndex++;
    showVideo(currentVideoIndex);
  }
});

document.querySelector(".prev-video").addEventListener("click", () => {
  if (currentVideoIndex > 0) {
    currentVideoIndex--;
    showVideo(currentVideoIndex);
  }
});
