const characters = ["ハナコ（水着）", "キキョウ", "ドレスアル", "マリー（アイドル）", "キサキ", "リオ", "シュン", "ハレ（キャンプ）", "カスミ", "アコ", "水着シロコ", "セナ（私服）"];

document.getElementById('searchBtn').addEventListener('click', searchData);

function setupAutocomplete(inputId, listId, suggestionsId) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);
    const suggestions = document.getElementById(suggestionsId);

    input.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        suggestions.innerHTML = '';
        if (!value) return;
        const matches = characters.filter(char => char.toLowerCase().includes(value));
        matches.forEach(char => {
            const div = document.createElement('div');
            div.textContent = char;
            div.addEventListener('click', function() {
                addSelectedItem(list, char);
                input.value = '';
                suggestions.innerHTML = '';
            });
            suggestions.appendChild(div);
        });
        suggestions.style.display = matches.length ? 'block' : 'none';
    });

    document.addEventListener('click', () => suggestions.style.display = 'none');
}

function addSelectedItem(list, name) {
    if ([...list.children].some(el => el.textContent.includes(name))) return;
    const item = document.createElement('div');
    item.classList.add('selected-item');
    item.innerHTML = `${name} <button onclick="this.parentElement.remove()">×</button>`;
    list.appendChild(item);
}

setupAutocomplete('includeInput', 'includeList', 'includeSuggestions');
setupAutocomplete('excludeInput', 'excludeList', 'excludeSuggestions');

function searchData() {
    console.log("検索処理を実装してください！");
}
