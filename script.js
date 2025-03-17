document.getElementById('searchBtn').addEventListener('click', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => filterResults(data.record))
        .catch(error => console.error('データの読み込みエラー:', error));
});

function filterResults(records) {
    const battleField = document.getElementById('battleField').value.trim();
    const bossName = document.getElementById('bossName').value.trim();
    const armor = document.getElementById('armor').value.trim();
    const includeStudents = document.getElementById('includeStudents').value.trim().split(',').map(s => s.trim());
    const excludeStudents = document.getElementById('excludeStudents').value.trim().split(',').map(s => s.trim());

    let filtered = records.filter(record => {
        return (!battleField || record["battle-field"] === battleField) &&
               (!bossName || record["boss-name"] === bossName) &&
               (!armor || record["armor"] === armor) &&
               (includeStudents.every(st => record.students.includes(st))) &&
               (excludeStudents.every(st => !record.students.includes(st)));
    });

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
            <strong>戦場:</strong> ${record["battle-field"]} <br>
            <strong>ボス:</strong> ${record["boss-name"]} <br>
            <strong>装甲:</strong> ${record["armor"]} <br>
            <strong>スコア:</strong> ${record["score"]} <br>
            <strong>キャラ:</strong> ${record.students.join(', ')} <br>
            <a href="${record.URL}" target="_blank">YouTubeリンク</a>
        `;
        resultList.appendChild(li);
    });
}
