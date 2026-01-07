// ダウンロード機能
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('download-btn');
    const guidelineCheckbox = document.getElementById('guideline-checkbox');
    
    // スマートフォンかどうかを判定
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
        // スマートフォンの場合はダウンロードボタンを非表示
        downloadBtn.style.display = 'none';
        if (guidelineCheckbox) {
            guidelineCheckbox.style.display = 'none';
        }
        const downloadInfo = downloadBtn.closest('.download-info');
        if (downloadInfo) {
            const mobileMessage = document.createElement('p');
            mobileMessage.textContent = '※スマートフォンからのダウンロードは対応していません。PCからアクセスしてください。';
            mobileMessage.style.color = '#999';
            mobileMessage.style.fontSize = '14px';
            mobileMessage.style.marginTop = '20px';
            downloadInfo.appendChild(mobileMessage);
        }
        return;
    }

    // チェックボックスの状態に応じてダウンロードボタンを有効/無効化
    if (guidelineCheckbox) {
        guidelineCheckbox.addEventListener('change', function() {
            if (this.checked) {
                downloadBtn.disabled = false;
                downloadBtn.style.opacity = '1';
                downloadBtn.style.cursor = 'pointer';
            } else {
                downloadBtn.disabled = true;
                downloadBtn.style.opacity = '0.5';
                downloadBtn.style.cursor = 'not-allowed';
            }
        });
    }

    downloadBtn.addEventListener('click', function() {
        // チェックボックスがチェックされているか確認
        if (!guidelineCheckbox || !guidelineCheckbox.checked) {
            return;
        }
        
        // 即座にダウンロードを開始
        downloadFile();
    });

    function downloadFile() {
        // 仮のZIPファイルを作成（実際のファイルに置き換えてください）
        const fileName = 'character-svg-data.zip';
        
        // 実際のファイルがある場合は、そのパスを指定
        const link = document.createElement('a');
        link.href = '#'; // 実際のファイルパスに置き換えてください
        link.download = fileName;
        
        // 実際のファイルがある場合は以下のコメントを外してください
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
        
        // 実際のファイルがない場合の処理（デモ用）
        console.log('ダウンロードを開始します。');
        console.log('※実際のファイルはまだ配置されていません。');
        console.log('ファイルを配置したら、download.jsのdownloadFile関数内のlink.hrefを実際のファイルパスに変更してください。');
    }
});

