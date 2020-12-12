// 即時関数: 気付かない間にグローバル変数を汚染しないために命令を囲っておくもの。js書くときはとりあえず囲っておく！
(()=>{
    // ここに命令を書く
    const $doc = document;
    const $tab = $doc.getElementById("js-tab");
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');

    // jsで最初に実行させたい命令を書く関数init
    const init = () => {
        $content[0].style.display = 'block';
    };
    init();

    // クリックしたら怒るイベント
    const handleClick = (e) => {
        e.preventDefault();
        // 前提: clickHandlerはクリックを検知するためのもの
        // preventDefault();: もともと設置されていたクリックイベントに対するリアクションを無効化するためのもの。

        // クリックされたnavとそのdataを取得
        const $this = e.target;
        const targetVal = $this.dataset.nav;
        console.log($tab.querySelectorAll('[data-content="' + targetVal + '"]')[0]);

        // 対称のコンテンツアクティブ化する
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
    };

    let index = 0;
    while(index < $nav.length){
        $nav[index].addEventListener('click', (e) => handleClick(e));
        index++;
    }

})();