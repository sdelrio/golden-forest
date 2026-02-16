import React from 'react';
import Link from '@docusaurus/Link';
import {
    useCurrentSidebarSiblings,
    filterDocCardListItems,
} from '@docusaurus/plugin-content-docs/client';

function DocumentIndex({ item }) {
    if (!item.href) {
        return null;
    }

    return (
        <li>
            <Link
                to={item.href}
                className="table-of-contents__link">
                {item.label}
            </Link>
        </li>
    );
}

export default function IndexList() {
    const items = useCurrentSidebarSiblings();
    const filteredItems = filterDocCardListItems(items);

    if (!filteredItems || filteredItems.length === 0) {
        return null;
    }

    return (
        <ul className="table-of-contents" style={{ listStyleType: 'circle' }}>
            {filteredItems.map((item, index) => (
                <DocumentIndex
                    key={index}
                    item={item}
                />
            ))}
        </ul>
    );
}
