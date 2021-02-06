function _reputation_from_talent(current_level, talents) {
    return Math.floor(talents * ((current_level - 1) * (current_level + 2) / 10 + 10));
}

/**
 * Returns reputation from talents and level.
 *
 * @param {number} current_level The cell with number of current visier level.
 * @param {number} talents The cell with number of current talent.
 * @return The value of visier power.
 * @customfunction
 */
function reputation_from_talent(current_level, talents) {
    current_level = Number(current_level);
    talents = Number(talents);
    let res = _reputation_from_talent(current_level, talents);
    document.getElementById("result_rep").value = res.toLocaleString("ru");
    return res;
}

function reputation_diff_of_levels(from_level, to_level, talents) {
    try {
        from_level = Number(from_level);
        to_level = Number(to_level);
        talents = Number(talents);
    } catch (e) {
        alert('Проверьте правильность ввода данных');
        return;
    }
    if (to_level < from_level) {
        alert('Новый уровень должен быть больше исходного');
        return;
    }
    let res = _reputation_from_talent(to_level, talents) - _reputation_from_talent(from_level, talents);
    document.getElementById("result2").value = res.toLocaleString("ru");
    return res;
}

function reputation_diff_of_talents(level, from_talents, to_talents) {
    try {
        level = Number(level);
        from_talents = Number(from_talents);
        to_talents = Number(to_talents);
    } catch (e) {
        alert('Проверьте правильность ввода данных');
        return;
    }
    if (to_talents < from_talents) {
        alert('Новое число талантов должно быть больше исходного');
        return;
    }
    let res = _reputation_from_talent(level, to_talents) - _reputation_from_talent(level, from_talents);
    document.getElementById("result3").value = res.toLocaleString("ru");
    return res;
}

function reputation_diff_of_both(from_level, to_level, from_talents, to_talents) {
    try {
        from_level = Number(from_level);
        to_level = Number(to_level);
        from_talents = Number(from_talents);
        to_talents = Number(to_talents);
    } catch (e) {
        alert('Проверьте правильность ввода данных');
        return;
    }
    if (to_talents < from_talents) {
        alert('Новое число талантов должно быть больше исходного');
        return;
    }
    if (to_level < from_level) {
        alert('Новый уровень должен быть больше исходного');
        return;
    }
    let res = _reputation_from_talent(to_level, to_talents) - _reputation_from_talent(from_level, from_talents);
    document.getElementById("result4").value = res.toLocaleString("ru");
    return res;
}

function vizier_power(current_level, tactic_talent, tactic_index) {
    current_level = Number(current_level);
    tactic_talent = Number(tactic_talent);
    tactic_index = Number(tactic_index);
    let res = current_level * tactic_talent * 5000 + tactic_index;
    document.getElementById("result_pow").value = res.toLocaleString("ru");
    return res;
}