document.addEventListener('DOMContentLoaded', function () {
    const studentList = [
        "アイリ",
        "アイリ（バンド）",
        "アカネ",
        "アカネ（バニーガール）",
        "アカリ",
        "アカリ（正月）",
        "アコ",
        "アコ（ドレス）",
        "アズサ",
        "アズサ（水着）",
        "アスナ",
        "アスナ（バニーガール）",
        "アスナ（制服）",
        "アツコ",
        "アツコ（水着）",
        "アヤネ",
        "アヤネ（水着）",
        "アリス",
        "アリス（メイド）",
        "アル",
        "アル（ドレス）",
        "アル（正月）",
        "イオリ",
        "イオリ（水着）",
        "イズナ",
        "イズナ（水着）",
        "イズミ",
        "イズミ（正月）",
        "イズミ（水着）",
        "イチカ",
        "イブキ",
        "イロハ",
        "ウイ",
        "ウイ（水着）",
        "ウタハ",
        "ウタハ（応援団）",
        "ウミカ",
        "エイミ",
        "エイミ（水着）",
        "カエデ",
        "カズサ",
        "カズサ（バンド）",
        "カスミ",
        "カホ",
        "カヨコ",
        "カヨコ（ドレス）",
        "カヨコ（正月）",
        "カリン",
        "カリン（バニーガール）",
        "カリン（制服）",
        "カンナ",
        "カンナ（水着）",
        "キキョウ",
        "キサキ",
        "キララ",
        "キリノ",
        "キリノ（水着）",
        "ココナ",
        "コタマ",
        "コタマ（キャンプ）",
        "コトリ",
        "コトリ（応援団）",
        "コハル",
        "コハル（水着）",
        "コユキ",
        "サオリ",
        "サオリ（水着）",
        "サキ",
        "サキ（水着）",
        "サクラコ",
        "サクラコ（アイドル）",
        "サツキ",
        "サヤ",
        "サヤ（私服）",
        "シグレ",
        "シグレ（温泉）",
        "シズコ",
        "シズコ（水着）",
        "シミコ",
        "ジュリ",
        "ジュリ（アルバイト）",
        "シュン",
        "シュン（幼女）",
        "ジュンコ",
        "ジュンコ（正月）",
        "シロコ",
        "シロコ（ライディング）",
        "シロコ（水着）",
        "シロコ＊テラー",
        "スズミ",
        "スミレ",
        "セイア",
        "セナ",
        "セナ（私服）",
        "セリカ",
        "セリカ（水着）",
        "セリカ（正月）",
        "セリナ",
        "セリナ（クリスマス）",
        "チアキ",
        "チェリノ",
        "チェリノ（温泉）",
        "チセ",
        "チセ（水着）",
        "チナツ",
        "チナツ（温泉）",
        "チヒロ",
        "ツクヨ",
        "ツバキ",
        "ツバキ（ガイド）",
        "ツルギ",
        "ツルギ（水着）",
        "トキ",
        "トキ（バニーガール）",
        "トモエ",
        "トモエ（チーパオ）",
        "ナギサ",
        "ナツ",
        "ネル",
        "ネル（バニーガール）",
        "ネル（制服）",
        "ノア",
        "ノア（パジャマ）",
        "ノドカ",
        "ノドカ（温泉）",
        "ノノミ",
        "ノノミ（水着）",
        "ハスミ",
        "ハスミ（体操服）",
        "ハナエ",
        "ハナエ（クリスマス）",
        "ハナコ",
        "ハナコ（水着）",
        "ハルカ",
        "ハルカ（正月）",
        "ハルナ",
        "ハルナ（正月）",
        "ハルナ（体操服）",
        "ハレ",
        "ハレ（キャンプ）",
        "ヒナ",
        "ヒナ（ドレス）",
        "ヒナ（水着）",
        "ヒナタ",
        "ヒナタ（水着）",
        "ヒビキ",
        "ヒビキ（応援団）",
        "ヒフミ",
        "ヒフミ（水着）",
        "ヒマリ",
        "ヒヨリ",
        "ヒヨリ（水着）",
        "フィーナ",
        "フウカ",
        "フウカ（正月）",
        "フブキ",
        "フブキ（水着）",
        "ホシノ",
        "ホシノ（水着）",
        "ホシノ（臨戦）",
        "マキ",
        "マキ（キャンプ）",
        "マコト",
        "マシロ",
        "マシロ（水着）",
        "マリー",
        "マリー（アイドル）",
        "マリー（体操服）",
        "マリナ",
        "マリナ（チーパオ）",
        "ミカ",
        "ミサキ",
        "ミチル",
        "ミドリ",
        "ミドリ（メイド）",
        "ミナ",
        "ミネ",
        "ミネ（アイドル）",
        "ミノリ",
        "ミモリ",
        "ミモリ（水着）",
        "ミヤコ",
        "ミヤコ（水着）",
        "ミユ",
        "ミユ（水着）",
        "ムツキ",
        "ムツキ（正月）",
        "メグ",
        "メル",
        "モエ",
        "モエ（水着）",
        "モミジ",
        "モモイ",
        "モモイ（メイド）",
        "ユウカ",
        "ユウカ（パジャマ）",
        "ユウカ（体操服）",
        "ユカリ",
        "ユズ",
        "ユズ（メイド）",
        "ヨシミ",
        "ヨシミ（バンド）",
        "リオ",
        "ルミ",
        "レイサ",
        "レイジョ",
        "レンゲ",
        "ワカモ",
        "ワカモ（水着）",
        "御坂美琴",
        "佐天涙子",
        "初音ミク",
        "食蜂操祈",
      ];

    // Tagify 初期化
    const includeStudentsTagify = new Tagify(document.getElementById('includeStudents'), {
        whitelist: studentList,
        enforceWhitelist: true,
        dropdown: { enabled: 1 }
    });

    const excludeStudentsTagify = new Tagify(document.getElementById('excludeStudents'), {
        whitelist: studentList,
        enforceWhitelist: true,
        dropdown: { enabled: 1 }
    });

    // 検索ボタンのイベント
    document.getElementById('searchBtn').addEventListener('click', () => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => filterResults(data.record))
            .catch(error => console.error('データの読み込みエラー:', error));
    });

    function filterResults(records) {
        const battleField = document.getElementById('battleField').value;
        const bossName = document.getElementById('bossName').value;
        const armor = document.getElementById('armor').value;
        const difficulty = document.getElementById('difficulty').value;
        const includeStudents = includeStudentsTagify.value.map(tag => tag.value);
        const excludeStudents = excludeStudentsTagify.value.map(tag => tag.value);

        let filtered = records.filter(record => {
            let score = record["score"]; // recordからscoreを取得
            console.log(score);
            let difficultyFilter = true; // difficultyによるフィルタリングの初期値をtrueに設定

            if (difficulty) { // difficultyが指定されている場合のみフィルタリング
                switch (difficulty) {
                    case "LUNATIC":
                        difficultyFilter = score >= 44025003;
                        break;
                    case "TORMENT":
                        difficultyFilter = score >= 31708002 && score <= 44025002;
                        break;
                    case "INSANE":
                        difficultyFilter = score >= 21016002 && score <= 31708001;
                        break;
                    case "EXTREME":
                        difficultyFilter = score >= 10160001 && score <= 21016000;
                        break;
                    case "HARDCORE":
                        difficultyFilter = score <= 10160000;
                        break;
                    default:
                        difficultyFilter = true; // difficultyが上記以外の場合はフィルタリングしない
                }
            }


            return (!battleField || record["battle-field"] === battleField) &&
                   (!bossName || record["boss-name"] === bossName) &&
                   (!armor || record["armor"] === armor) &&
                   (includeStudents.length === 0 || includeStudents.every(st => record.students.includes(st))) &&
                   (excludeStudents.length === 0 || excludeStudents.every(st => !record.students.includes(st))) &&
                   difficultyFilter; // difficultyによるフィルタリング結果を追加
        });

        filtered.sort((a, b) => b.score - a.score);
        displayResults(filtered);
    }

    function displayResults(results) {
        const resultList = document.getElementById('resultList');
        resultList.innerHTML = '';

        if (results.length === 0) {
            resultList.innerHTML = '<li class="no-data">該当するデータがありません。</li>';
            return;
        }

        fetch('face.json')
            .then(response => response.json())
            .then(faceData => {
                results.forEach(record => {
                    const li = document.createElement('li');
                    li.classList.add('result-item');

                    let studentsHtml = '<div class="students-grid">';
                    record.students.forEach(studentName => {
                        const studentFace = faceData.record.find(face => face.name === studentName);
                        const faceImage = studentFace ? `<img src="${studentFace["face-image"]}" alt="${studentName}">` : '';
                        studentsHtml += `
                            <div class="student-item">
                                ${faceImage}
                                <span>${studentName}</span>
                            </div>
                        `;
                    });
                    studentsHtml += '</div>';

                    li.innerHTML = `
                        <strong>スコア：${record.score.toLocaleString()}</strong>
                        ${studentsHtml}
                        <a href="${record.URL}" class="video-link-btn" target="_blank">動画を見る</a>
                    `;
                    resultList.appendChild(li);
                });
            })
            .catch(error => console.error('顔写真データの読み込みエラー:', error));
    }
});