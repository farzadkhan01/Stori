const lateView = function (secId) {
    const section = document.getElementById(secId);

    const rect = section.getBoundingClientRect();
    console.log(rect);

};

const result = function () {
    lateView('aboutUs');

};

result();