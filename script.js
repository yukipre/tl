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
    const includeStudents = document.getElementById('includeStudents').value.trim().split(',').map(s => s.trim()).filter(s => s);
    const excludeStudents = document.getElementById('excludeStudents').value.trim().split(',').map(s => s.trim()).filter(s => s);

    let filtered = records.filter(record => {
        return (!battleField || record["battle-field"] === battleField) &&
               (!bossName || record["boss-name"] === bossName) &&
               (!armor || record["armor"] === armor) &&
               (includeStudents.length === 0 || includeStudents.every(st => record.students.includes(st))) &&
               (excludeStudents.length === 0 || excludeStudents.every(st => !record.students.includes(st)));
    });

    // 🔹 スコアが高い順にソート
    filtered.sort((a, b) => b.score - a.score);

    displayResults(filtered);
}

function displayResults(results) {
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = '';

    if (results.length === 0) {
        resultList.innerHTML = '<li class="result-item">該当するデータがありません。</li>';
        return;
    }

    results.forEach(record => {
        const li = document.createElement('li');
        li.classList.add('result-item');
        li.innerHTML = `
            <strong>スコア:</strong> ${record.score.toLocaleString()} <br>
            <strong>キャラ:</strong> ${record.students.join(', ')} <br>
            <a href="${record.URL}" target="_blank">動画リンク</a>
        `;
        resultList.appendChild(li);
    });
}
