import attackPanel from '../attackPanel';

test.each([
    {
        data: {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            special: [
                {
                    id: 8,
                    name: 'Двойной выстрел',
                    icon: 'http://...',
                    description: 'Двойной выстрел наносит двойной урон',
                },
                {
                    id: 9,
                    name: 'Нокаутирующий удар',
                    icon: 'http://...',
                },
            ],
        },
        expected: [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон',
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...',
                description: 'Описание недоступно',
            },
        ],
    },
])('correct operation of the function', ({ data, expected }) => {
    expect(attackPanel(data)).toEqual(expected);
});

test.each([
    {
        data: {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            special: [
                {
                    name: 'Двойной выстрел',
                    icon: 'http://...',
                    description: 'Двойной выстрел наносит двойной урон',
                },
                {
                    id: 9,
                    name: 'Нокаутирующий удар',
                    icon: 'http://...',
                },
            ],
        },
        expected: [
            {
                id: undefined,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон',
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...',
                description: 'Описание недоступно',
            },
        ],
    },
])('id undefined', ({ data, expected }) => {
    expect(attackPanel(data)).toEqual(expected);
});

test.each([
    {
        data: {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            special: [],
        },
        expected: [],
    },
])('special: []', ({ data, expected }) => {
    expect(attackPanel(data)).toEqual(expected);
});
