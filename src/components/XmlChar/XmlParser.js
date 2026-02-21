export const parseCharacterXml = (xmlString) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    const charNode = xmlDoc.getElementsByTagName("character")[0];

    if (!charNode) return null;

    const getTopLevelText = (node, tagName) => {
        // Only look at direct children of the node to avoid picking up sub-tags (like in classes)
        const children = Array.from(node.children);
        const target = children.find(child => child.nodeName === tagName);
        return target ? target.textContent : "";
    };

    const getText = (node, tagName) => {
        const target = node.getElementsByTagName(tagName)[0];
        return target ? target.textContent : "";
    };

    const getNumber = (node, tagName) => {
        const text = getText(node, tagName);
        return text ? parseInt(text, 10) : 0;
    };

    const charData = {
        name: getTopLevelText(charNode, "name"),
        race: getTopLevelText(charNode, "race"),
        alignment: getTopLevelText(charNode, "alignment"),
        background: getTopLevelText(charNode, "background"),
        deity: getTopLevelText(charNode, "deity"),
        classes: [],
        abilities: {},
        ac: 0,
        hp: 0,
        speed: 0,
        initiative: 0,
        profBonus: 0,
        skills: [],
        languages: [],
        feats: []
    };

    // Parse Classes
    const classesNode = charNode.getElementsByTagName("classes")[0];
    if (classesNode) {
        Array.from(classesNode.children).forEach(cls => {
            charData.classes.push({
                name: getText(cls, "name"),
                level: getNumber(cls, "level")
            });
        });
    }

    // Parse Abilities
    const abilitiesNode = charNode.getElementsByTagName("abilities")[0];
    if (abilitiesNode) {
        const stats = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
        stats.forEach(stat => {
            const statNode = abilitiesNode.getElementsByTagName(stat)[0];
            if (statNode) {
                charData.abilities[stat] = {
                    score: getNumber(statNode, "score"),
                    bonus: getNumber(statNode, "bonus"),
                    save: getNumber(statNode, "save")
                };
            }
        });
    }

    // Parse Vitality
    const defensesNode = charNode.getElementsByTagName("defenses")[0];
    if (defensesNode) {
        const acNode = defensesNode.getElementsByTagName("ac")[0];
        if (acNode) charData.ac = getNumber(acNode, "total");
    }

    const hpNode = charNode.getElementsByTagName("hp")[0];
    if (hpNode) charData.hp = getNumber(hpNode, "total");

    const speedNode = charNode.getElementsByTagName("speed")[0];
    if (speedNode) charData.speed = getNumber(speedNode, "total");

    // Parse Initiative
    const initiativeNode = charNode.getElementsByTagName("initiative")[0];
    if (initiativeNode) charData.initiative = getNumber(initiativeNode, "total");

    // Parse Proficiency Bonus
    charData.profBonus = getNumber(charNode, "profbonus");

    // Parse Skills (Proficient Only)
    const skillList = charNode.getElementsByTagName("skilllist")[0];
    if (skillList) {
        Array.from(skillList.children).forEach(skill => {
            const prof = getNumber(skill, "prof");
            if (prof > 0) {
                charData.skills.push({
                    name: getText(skill, "name"),
                    total: getNumber(skill, "total")
                });
            }
        });
    }

    // Parse Languages
    const languageList = charNode.getElementsByTagName("languagelist")[0];
    if (languageList) {
        Array.from(languageList.children).forEach(lang => {
            charData.languages.push(getText(lang, "name"));
        });
    }

    // Parse Feats
    const featList = charNode.getElementsByTagName("featlist")[0];
    if (featList) {
        Array.from(featList.children).forEach(feat => {
            charData.feats.push(getText(feat, "name"));
        });
    }

    return charData;
};
