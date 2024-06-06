
// Real api. Will be uncommented

// export default class API {
//     static url = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000/api';

//     static async status() {
//         try {
//             const res = await fetch(`${API.url}/api/status/`);
//             const data = await res.json();
//             return data;
//         } catch (err) {
//             console.error(err);
//             return null;
//         }
//     }

//     static async getNotes() {
//         try {
//             const res = await fetch(`${API.url}/api/get-notes`);
//             const data = await res.json();
//             return data;
//         } catch (err) {
//             console.error(err);
//             return null;
//         }
//     }
// }


// fake api. Will be commented
export default class API {
    static async status() {
        return {
            status: 'OK'
        }
    }

    static async getNotes() {
        return [
            {
                id: '1',
                title: 'Python as a note',
                label: {
                    id: '1',
                    title: 'code',
                },
                author: '1',
                text: 'Python is a programming language',
                created: '2021-10-10T12:00:00.000Z',
                modified: '2021-10-10T12:00:00.000Z',
            },
            {
                id: '2',
                title: 'JavaScript as a note',
                label: {
                    id: '2',
                    title: 'code',
                },
                author: '1',
                text: 'JavaScript is a programming language',
                created: '2021-11-10T12:00:00.000Z',
                modified: '2021-11-10T12:00:00.000Z',
            },
            {
                id: '3',
                title: 'PHP as a note',
                label: {
                    id: '3',
                    title: 'code',
                },
                author: '1',
                text: 'PHP is a programming language',
                created: '2021-12-11T12:00:00.000Z',
                modified: '2021-12-11T12:00:00.000Z',
            },
            {
                id: '4',
                title: 'Java as a note',
                label: {
                    id: '4',
                    title: 'code',
                },
                author: '1',
                text: 'Java is a programming language',
                created: '2021-12-12T12:00:00.000Z',
                modified: '2021-12-12T12:00:00.000Z',
            },
            {
                id: '5',
                title: 'Ruby as a note',
                label: {
                    id: '5',
                    title: 'code',
                },
                author: '1',
                text: 'Ruby is a programming language',
                created: '2021-12-13T12:00:00.000Z',
                modified: '2021-12-13T12:00:00.000Z',
            },
            {
                id: '6',
                title: 'Go as a note',
                label: {
                    id: '6',
                    title: 'code',
                },
                author: '1',
                text: 'Go is a programming language',
                created: '2021-12-14T12:00:00.000Z',
                modified: '2021-12-14T12:00:00.000Z',
            },
            {
                id: '7',
                title: 'Rust as a note',
                label: {
                    id: '7',
                    title: 'code',
                },
                author: '1',
                text: 'Rust is a programming language',
                created: '2021-12-15T12:00:00.000Z',
                modified: '2021-12-15T12:00:00.000Z',
            },
            {
                id: '8',
                title: 'C++ as a note',
                label: {
                    id: '8',
                    title: 'code',
                },
                author: '1',
                text: 'C++ is a programming language',
                created: '2021-12-16T12:00:00.000Z',
                modified: '2021-12-16T12:00:00.000Z',
            },
            {
                id: '9',
                title: 'C# as a note',
                label: {
                    id: '9',
                    title: 'code',
                },
                author: '1',
                text: 'C# is a programming language',
                created: '2021-12-17T12:00:00.000Z',
                modified: '2021-12-17T12:00:00.000Z',
            },
            {
                id: '10',
                title: 'C as a note',
                label: {
                    id: '10',
                    title: 'code',
                },
                author: '1',
                text: 'C is a programming language',
                created: '2021-12-18T12:00:00.000Z',
                modified: '2021-12-18T12:00:00.000Z',
            },
            {
                id: '11',
                title: 'Swift as a note',
                label: {
                    id: '11',
                    title: 'code',
                },
                author: '1',
                text: 'Swift is a programming language',
                created: '2021-12-19T12:00:00.000Z',
                modified: '2021-12-19T12:00:00.000Z',
            },
            {
                id: '12',
                title: 'Kotlin as a note',
                label: {
                    id: '12',
                    title: 'code',
                },
                author: '1',
                text: 'Kotlin is a programming language',
                created: '2021-12-20T12:00:00.000Z',
                modified: '2021-12-20T12:00:00.000Z',
            }
        ]
    }
}
