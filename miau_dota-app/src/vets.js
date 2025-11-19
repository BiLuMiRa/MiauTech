const vets = [
    {
        id: '1',
        image: 'https://i.pinimg.com/736x/64/94/af/6494af8a76a09d97d5c04c7123a52af1.jpg',
        name: 'Dra. Lana dos Reis',
        location: 'Rua dos Bobos, 0',
        specialty: 'Dermatologista veterinário',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet consequat orci, in sodales risus dictum fringilla. Vestibulum eu odio luctus, accumsan ante ut, molestie ante. Nulla ac vehicula orci. Sed tincidunt urna eget enim tempus, ac mattis neque molestie. Vivamus non tristique purus. Pellentesque tincidunt tincidunt mauris eget finibus. Mauris ex eros, sollicitudin et viverra a, consectetur in risus. Aenean rhoncus velit et nisl iaculis iaculis. Morbi euismod tristique fermentum.',
    },
    {
        id: '2',
        image: 'https://i.redd.it/charli-with-dogs-v0-leii1ueidwuf1.jpg?width=1024&format=pjpg&auto=webp&s=d179538c24bfd3ebb474d2c24d02c1f2f69e31ab',
        name: 'Dra. Charlene xavier',
        location: 'Rua dos Bobos, 0',
        specialty: 'Cirurgião geral',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet consequat orci, in sodales risus dictum fringilla. Vestibulum eu odio luctus, accumsan ante ut, molestie ante. Nulla ac vehicula orci. Sed tincidunt urna eget enim tempus, ac mattis neque molestie. Vivamus non tristique purus. Pellentesque tincidunt tincidunt mauris eget finibus. Mauris ex eros, sollicitudin et viverra a, consectetur in risus. Aenean rhoncus velit et nisl iaculis iaculis. Morbi euismod tristique fermentum.',
    },
    {
        id: '3',
        image: 'https://i.pinimg.com/736x/7f/82/61/7f826147290ccc90e4f8a78c2b25d9ff.jpg',
        name: 'Dra. Adrianne Lira',
        location: 'Rua dos Bobos, 0',
        specialty: 'Clínica geral',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet consequat orci, in sodales risus dictum fringilla. Vestibulum eu odio luctus, accumsan ante ut, molestie ante. Nulla ac vehicula orci. Sed tincidunt urna eget enim tempus, ac mattis neque molestie. Vivamus non tristique purus. Pellentesque tincidunt tincidunt mauris eget finibus. Mauris ex eros, sollicitudin et viverra a, consectetur in risus. Aenean rhoncus velit et nisl iaculis iaculis. Morbi euismod tristique fermentum.',
    },
    {
        id: '4',
        image: 'https://pm1.aminoapps.com/6630/8a9c4abf1ff77373dc28363de32837d03d8f9460_hq.jpg',
        name: 'Dr. Troi Silva',
        location: 'Rua dos Bobos, 0',
        specialty: 'Oftamologista veterinário',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet consequat orci, in sodales risus dictum fringilla. Vestibulum eu odio luctus, accumsan ante ut, molestie ante. Nulla ac vehicula orci. Sed tincidunt urna eget enim tempus, ac mattis neque molestie. Vivamus non tristique purus. Pellentesque tincidunt tincidunt mauris eget finibus. Mauris ex eros, sollicitudin et viverra a, consectetur in risus. Aenean rhoncus velit et nisl iaculis iaculis. Morbi euismod tristique fermentum.',
    },
    {
        id: '5',
        image: 'https://pbs.twimg.com/media/Gj_tNJ7XkAAx2-U.jpg',
        name: 'Dra. Glaucia Costa',
        location: 'Rua dos Bobos, 0',
        specialty: 'Odontologista veterinário',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet consequat orci, in sodales risus dictum fringilla. Vestibulum eu odio luctus, accumsan ante ut, molestie ante. Nulla ac vehicula orci. Sed tincidunt urna eget enim tempus, ac mattis neque molestie. Vivamus non tristique purus. Pellentesque tincidunt tincidunt mauris eget finibus. Mauris ex eros, sollicitudin et viverra a, consectetur in risus. Aenean rhoncus velit et nisl iaculis iaculis. Morbi euismod tristique fermentum.',
    },
    {
        id: '6',
        image: '../public/imgs/miaujuda/rubel-pato.png',
        name: 'Dr. Rubel Brisolla',
        location: 'Rua dos Bobos, 0',
        specialty: 'Especialista em silvestres',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet consequat orci, in sodales risus dictum fringilla. Vestibulum eu odio luctus, accumsan ante ut, molestie ante. Nulla ac vehicula orci. Sed tincidunt urna eget enim tempus, ac mattis neque molestie. Vivamus non tristique purus. Pellentesque tincidunt tincidunt mauris eget finibus. Mauris ex eros, sollicitudin et viverra a, consectetur in risus. Aenean rhoncus velit et nisl iaculis iaculis. Morbi euismod tristique fermentum.',
    },
    {
        id: '7',
        image: 'https://i.pinimg.com/736x/53/c0/6c/53c06cf7e335dcef34e500edb50dd6e4.jpg',
        name: 'Dr. Markos Liino',
        location: 'Rua dos Bobos, 127',
        specialty: 'Especialista em silvestres',
        description: 'Prazer, eu sou o Dr. Markos Liino, médico veterinário especializado no cuidado de animais silvestres e exóticos, como aves, répteis e pequenos mamíferos. Trabalho com consultas, exames, manejo nutricional, cirurgias e orientação para criação responsável, sempre seguindo normas de bem-estar e conservação da fauna. Tenho como missão garantir que cada espécie receba o manejo adequado às suas necessidades únicas, com respeito, segurança e conhecimento técnico. Conte comigo para cuidar do seu animal exótico com profissionalismo e carinho.',
    },
    {
        id: '8',
        image: 'https://pbs.twimg.com/media/E7p69d1WEAUujv9.jpg',
        name: 'Dra. Lourdes Virginia',
        location: 'Rua dos Bobos, 127',
        specialty: 'Clínico geral',
        description: 'Prazer, eu sou o Dr. Markos Liino, médico veterinário especializado no cuidado de animais silvestres e exóticos, como aves, répteis e pequenos mamíferos. Trabalho com consultas, exames, manejo nutricional, cirurgias e orientação para criação responsável, sempre seguindo normas de bem-estar e conservação da fauna. Tenho como missão garantir que cada espécie receba o manejo adequado às suas necessidades únicas, com respeito, segurança e conhecimento técnico. Conte comigo para cuidar do seu animal exótico com profissionalismo e carinho.',
    }
    

]

export default vets;