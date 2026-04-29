const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] as string[] }, { 'size': [] as string[] }],
        [{ 'align': [] as string[] }, { 'direction': 'rtl' }, { 'color': [] as string[] }],
        ['bold', 'italic', 'underline', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image']
    ],
};

const formats = [
    'header', 'size', 'font', 'align', 'direction', 'color',
    'bold', 'italic', 'underline', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];

export {
    modules,formats
};