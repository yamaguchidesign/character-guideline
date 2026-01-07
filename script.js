// サイドメニューの切り替え機能
document.addEventListener('DOMContentLoaded', function() {
    const menuButtons = document.querySelectorAll('.menu-btn');
    const contentSections = document.querySelectorAll('.content-section');

    menuButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');

            // すべてのボタンとセクションからactiveクラスを削除
            menuButtons.forEach(btn => btn.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));

            // クリックされたボタンと対応するセクションにactiveクラスを追加
            this.classList.add('active');
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.classList.add('active');
            }
        });
    });
});

