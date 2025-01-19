document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("dblclick", function(e) { e.preventDefault(); }, { passive: false });

    // 札を混ぜる
    let fudaOrder = shuffleArray(fudalist)

    let startTime;
    let currentFuda = 0;

    // HTML要素の取得
    const imageElement = document.getElementById('random-image');
    const reloadButton = document.getElementById('reload-button');
    const kimariji = document.getElementById('kimariji');
    const kimarijiButton = document.getElementById('kimariji-button');

    // 決まり字の表示
    kimarijiButton.addEventListener('click', function() {
        if (window.getComputedStyle(kimariji).display === 'none') {
            kimariji.style.display = 'flex';
        }
    });

    // 配列をシャッフルする
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // タイマーの停止・リセット
    function stopTimer() {
        const elapsedTime = Date.now() - startTime;
        const seconds = Math.floor(elapsedTime / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        alert(`終わりです。${minutes}分${remainingSeconds}秒でした！`);

        resetPage();
    }

    // 最初からボタンクリック時のイベント
    function reloadPage(){
        let flag = window.confirm("最初の状態に戻りますが、いいですか？");
        if(flag) {
            resetPage();
        }
    }

    // 状態のリセット
    function resetPage(){
        imageElement.src = './torifuda/tori_0.png';
        kimariji.textContent = '';
        currentFuda = 0;
        fudaOrder = shuffleArray(fudaOrder);
    }

    // 変化後の決まり字を取得
    function getKimariji(order) {
        // order番目のkimarijiを取得
        const currentKimariji = fudaOrder[order].kimariji;

        // order番目より後の要素を抽出
        const targetFuda = fudalist.slice(order + 1);

        // 決まり字のリストを作成
        const kimarijis = targetFuda.map(fuda => fuda.kimariji);
        
        // 1文字目から3文字目までチェック
        for(let i = 1; i <= 3; i++) {
            // currentKimarijiのi文字目までを取得
            let checkStr = currentKimariji.substring(0, i);
            
            // kimarijisの中にcheckStrで始まる文字列があるかチェック
            let exists = kimarijis.some(k => k.startsWith(checkStr));
            
            // 存在しなければその文字列を返す
            if(!exists) {
                return checkStr;
            }
        }
        
        // 3文字まで全てマッチした場合は決まり字自体を返す
        return currentKimariji;
    }

    // 札リストから選ばれた札を表示
    function displayFuda(order) {
        const fuda = fudaOrder[order];

        // 50%の確率で逆向きに表示
        const isFlipped = Math.random() < 0.5;
        imageElement.src = isFlipped ? fuda.reverse : fuda.normal;

        // 決まり字(変化後)の表示
        document.getElementById('kimariji').textContent = getKimariji(order);
    }

    // 画像クリック時のイベント
    imageElement.addEventListener('click', () => {
        if (currentFuda === 0) {
            startTime = Date.now();
            displayFuda(currentFuda);
            currentFuda++;
        } else if (currentFuda === 100) {
            stopTimer();
        } else {
            displayFuda(currentFuda);
            currentFuda++;
        }

        if (window.getComputedStyle(kimariji).display === 'flex') {
            kimariji.style.display = 'none';
        }
    });

    // 最初からボタンクリックでリロードイベント
    reloadButton.addEventListener('click', reloadPage);
});