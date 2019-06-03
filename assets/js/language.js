var tnum = 'en';

$(document).ready(function(){

    $(document).click( function(e) {
        $('.translate_wrapper, .more_lang').removeClass('active');
    });

    $('.translate_wrapper .current_lang').click(function(e){
        e.stopPropagation();
        $(this).parent().toggleClass('active');

        setTimeout(function(){
            $('.more_lang').toggleClass('active');
        }, 50);
    });


    /*TRANSLATE*/
    translate(tnum);

    $('.more_lang .lang').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.more_lang').removeClass('active');

        var img = $(this).find('img').attr('src');
        var lang = $(this).attr('data-value');
        var tnum = lang;
        translate(tnum);

        $('.current_lang .lang-txt').text(lang);
        $('.current_lang img').attr('src', img);

        if(lang == 'ar'){
            $('body').attr('dir', 'rtl');
        }else{
            $('body').attr('dir', 'ltr');
        }

    });
});

function translate(tnum){
    $('.masthead h1').text(trans[0][tnum]);
    $('.home-l').text(trans[1][tnum]);
    $('.posts-l').text(trans[2][tnum]);
    $('.postlist-l').text(trans[3][tnum]);
    $('.newpost-l').text(trans[4][tnum]);
    $('.wiki-l').text(trans[5][tnum]);
    $('.wikilist-l').text(trans[6][tnum]);
    $('.newwiki-l').text(trans[7][tnum]);
    $('.login-l').text(trans[8][tnum]);
    $('.sign-l').text(trans[9][tnum]);
    $('.logout-l').text(trans[10][tnum]);
    $('.search-l').text(trans[11][tnum]);
    $('.post-bc').text(trans[12][tnum]);
    $('.comment-l').text(trans[13][tnum]);
    $('.post-l0').text(trans[14][tnum]);
    $('.wiki-l0').text(trans[15][tnum]);
    $('.readmore').text(trans[16][tnum]);
    $('.quicklinks').text(trans[17][tnum]);
    $('.socialmedia').text(trans[18][tnum]);
    $('.contacus').text(trans[19][tnum]);
    $('.helptopic').text(trans[20][tnum]);
    $('.helptopic0').text(trans[21][tnum]);
    $('.contacus0').text(trans[22][tnum]);
    $('.contacnow').text(trans[23][tnum]);
    $('.qanda').text(trans[24][tnum]);
    $('.qanda0').text(trans[25][tnum]);
    $('.wenku').text(trans[26][tnum]);
    $('.relogin').text(trans[27][tnum]);
    $('.registerlogin').text(trans[28][tnum]);
    $('.welcome').text(trans[29][tnum]);
    $('.welcome0').text(trans[30][tnum]);
    $('.register').text(trans[31][tnum]);
    $('.register0').text(trans[32][tnum]);
    $('.goregister').text(trans[33][tnum]);
    $('.title-l').text(trans[34][tnum]);
    $('.label-l').text(trans[35][tnum]);
    $('.summary-l').text(trans[36][tnum]);
    $('.content-l').text(trans[37][tnum]);
    $('.submit-l').text(trans[38][tnum]);
}

var trans = [
    {
        en : 'Hi, how can we help you?',
        ru : 'Здравствуйте, могу ли я вам помочь?',
        es : 'Hola te puedo ayudar',
        fr : 'Bonjour, puis-je vous aider?',
        de : 'Hallo darf ich dir helfen',
        cn : '你好，请问需要什么帮助？',
        cnt : '你好，請問我能幫到你什麼？'
    },{
        en : 'Home',
        ru : 'дома',
        es : 'Inicio',
        fr: "Accueil",
        de: 'Zuhause',
        cn: '首页',
        cnt : '首頁'
    },{
        en : 'Q&A Community',
        ru : 'сообщество',
        es : 'Comunidad',
        fr : 'Communauté',
        de : 'Gemeinschaft',
        cn : '问答社区',
        cnt : '社區'
    },{
        en : 'Post List',
        cn : '问答列表',
        es : 'Lista de preguntas y respuestas',
        fr : 'Liste de questions et réponses',
        de : 'Frage- und Antwortliste',
        cnt : '問答列表',
        ru : 'Список вопросов и ответов'
    },{
        en : 'Post New Question',
        cn : '发表新的问题',
        es : 'Publicar una nueva pregunta',
        fr : 'Poster une nouvelle question',
        de : 'Stellen Sie eine neue Frage',
        cnt : '發表新的問題',
        ru : 'Опубликовать новый вопрос'
    },{
        en : 'Wiki',
        cn : '百科',
        es : 'Enciclopedia',
        fr : 'Encyclopédie',
        de : 'Enzyklopädie',
        cnt : '百科',
        ru : 'энциклопедия'
    },{
        en : 'Wiki List',
        cn : '百科目录',
        es : 'Cerrar sesión',
        fr : 'Liste d`encyclopédie',
        de : 'Enzyklopädieliste',
        cnt : '百科列表',
        ru : 'Список энциклопедий'
    },{
        en : 'Create new Wiki',
        cn : '新百科',
        es : 'Crear una nueva enciclopedia.',
        fr : 'Créer une nouvelle encyclopédie',
        de : 'Erstellen Sie eine neue Enzyklopädie',
        cnt : '創建新百科',
        ru : 'Создать новую энциклопедию'
    },{
        en : 'Login',
        cn : '登陆',
        es : 'Iniciar sesión',
        fr : 'Connexion',
        de : 'Einloggen',
        cnt : '登錄',
        ru : 'войти'
    },{
        en : 'Sign Up',
        cn : '注册',
        es : 'Registro',
        fr : 'Inscription',
        de : 'Registrierung',
        cnt : '註冊',
        ru : 'регистрация'
    },{
        en : 'Logout',
        cn : '退出登录',
        es : 'Cerrar sesión',
        fr : 'Déconnexion',
        de : 'Abmelden',
        cnt : '註銷',
        ru : 'Выход'
    },{
        en : 'Search',
        cn : '搜索',
        es : 'Búsqueda',
        fr : 'Recherche',
        de : 'Suche',
        cnt : '搜索',
        ru : 'поиск'
    },{
        en : 'Post',
        cn : '帖子',
        es : 'Publicar',
        fr : 'Publier',
        de : 'Post',
        cnt : '帖子',
        ru : 'Сообщений'
    },{
        en : 'If you wanna get involve to the community, please log in first.',
        cn : '想要参与讨论，请先登录',
        es : 'Para participar en la discusión, por favor inicie sesión primero',
        fr : 'Pour participer à la discussion, connectez-vous d\'abord',
        de : 'Um an der Diskussion teilzunehmen, loggen Sie sich bitte zuerst ein',
        cnt : '想要參與討論，請先登錄',
        ru : 'обсуждении, пожалуйста, войдите сначала'
    },{
        en : 'Publish new views, ideas or provide alternative solutions expand our thinking',
        cn : '发表新观点、新想法，来扩展思维和知识贮备',
        es : 'Publique nuevas ideas, nuevas ideas, para expandir el pensamiento y el almacenamiento de conocimiento.',
        fr : 'Publier de nouvelles idées, de nouvelles idées, pour développer la réflexion et le stockage des connaissances',
        de : 'Veröffentlichen Sie neue Ideen, neue Ideen, um das Denken und den Wissensspeicher zu erweitern',
        cnt : '發表新觀點、新想法，來擴展思維和知識貯備',
        ru : 'Публиковать новые идеи, новые идеи, чтобы расширить мышление и хранение знаний'
    },{
        en : 'The sun lit up the world, the knowledge to light life.',
        cn : '阳光照亮了世界，知识点亮了生命。',
        es : 'El sol ilumina el mundo, y el conocimiento ilumina la vida.',
        fr : 'Le soleil illumine le monde et la connaissance illumine la vie.',
        de : 'Die Sonne erleuchtet die Welt und Wissen erleuchtet das Leben.',
        cnt : '陽光照亮了世界，知識點亮了生命。',
        ru : 'Солнце освещает мир, а знание освещает жизнь.'
    },{
        en : 'Read more...',
        cn : '阅读详情...',
        es : 'Más...',
        fr : 'Plus...',
        de : 'Mehr...',
        cnt : '閱讀詳情...',
        ru : 'более...'
    },{
        en : 'Quick Links',
        cn : '快捷链接',
        es : 'enlaces rápidos',
        fr : 'Liens rapides',
        de : 'Schnellzugriff',
        cnt : '快速鏈接',
        ru : 'Быстрые ссылки'
    },{
        en : 'Connect via Social media',
        cn : '通过社交媒体连接',
        es : 'Conéctate a través de las redes sociales',
        fr : 'Connectez-vous via les médias sociaux',
        de : 'Verbinden Sie sich über soziale Medien',
        cnt : '通過社交媒體連接',
        ru : 'Подключиться через социальные сети'
    },{
        en : 'Contact Us',
        cn : '联系我们',
        es : 'Contáctenos',
        fr : 'Contactez nous',
        de : 'kontaktiere uns',
        cnt : '聯繫我們',
        ru : 'связаться с нами'
    },{
        en : 'Browse Help Topics',
        cn : '有些问题很困惑？来这找找答案吧！',
        es : 'Buscar temas de ayuda',
        fr : 'Parcourir les rubriques d\'aide',
        de : 'Hilfethemen durchsuchen',
        cnt : '浏览帮助主题',
        ru : 'Просмотр разделов справки'
    },{
        en : 'When you are stuck in something don‘t waste your time just let us know we are here to help you',
        cn : '当你陷入困境时不要浪费你的时间，请告诉我们，我们随时为你提供帮助',
        es : 'Cuando esté atrapado en algo, no pierda su tiempo, háganos saber que estamos aquí para ayudarlo',
        fr : 'Lorsque vous êtes coincé dans quelque chose, ne perdez pas votre temps, dites-nous simplement que nous sommes là pour vous aider.',
        de : 'Wenn Sie in etwas stecken, verschwenden Sie nicht Ihre Zeit, lassen Sie uns wissen, dass wir hier sind, um Ihnen zu helfen',
        cnt : '當你陷入困境時不要浪費你的時間，請告訴我們，我們隨時為你提供幫助',
        ru : 'Если вы застряли в чем-то, не тратьте свое время, просто дайте нам знать, что мы здесь, чтобы помочь вам'
    },{
        en : 'If you have questions which are beyond this knowledgebase or have interesting in our project Kindly contact us',
        cn : '如果您有超出此知识库的问题或对我们的项目感兴趣，请联系我们',
        es : 'Si tiene preguntas que están más allá de esta base de conocimientos o tiene interés en nuestro proyecto, por favor contáctenos',
        fr : 'Si vous avez des questions qui vont au-delà de cette base de connaissances ou qui intéressent notre projet, veuillez nous contacter.',
        de : 'Wenn Sie Fragen haben, die über diese Wissensdatenbank hinausgehen oder für unser Projekt interessant sind, wenden Sie sich bitte an uns',
        cnt : '如果您有超出此知識庫的問題或對我們的項目感興趣，請聯繫我們',
        ru : 'Если у вас есть вопросы, которые выходят за рамки этой базы знаний или интересны в нашем проекте, пожалуйста, свяжитесь с нами.'
    },{
        en : 'Join Us Now',
        cn : '现在就加入我们',
        es : 'Únete a nosotros ahora',
        fr : 'Rejoignez nous maintenant',
        de : 'Begleiten Sie uns jetzt',
        cnt : '現在就加入我們',
        ru : 'Присоединяйтесь к нам сейчас'
    },{
        en : 'Questions & Answers',
        cn : '问题和答案',
        es : 'preguntas y respuestas',
        fr : 'questions et réponses',
        de : 'Fragen',
        cnt : '問題和答案',
        ru : 'Вопросы и Ответы'
    },{
        en : 'Interesting questions and wonderful answers, presenting a wonderful community',
        cn : '有趣的提问与精彩的回答，向您呈现出精彩纷呈的社区',
        es : 'Interesantes preguntas y maravillosas respuestas, presentando una maravillosa comunidad.',
        fr : 'Questions intéressantes et réponses merveilleuses, présentant une communauté merveilleuse',
        de : 'Interessante Fragen und wundervolle Antworten, die eine wundervolle Community präsentieren',
        cnt : '有趣的提問與精彩的回答，向您呈現出精彩紛呈的社區',
        ru : 'Интересные вопросы и замечательные ответы, представляющие замечательное сообщество'
    },{
        en : 'Our wiki database is not just pre-configured, we pick out the best parts of the popular community issues, organize them, and put them into the wiki\'s database to provide information more efficiently. Of course, everyone can participate in the release of the new wiki, welcome to join us!',
        ru : 'Наша база данных вики не только предварительно настроена, мы выбираем лучшие части популярных вопросов сообщества, организуем их и помещаем в базу данных вики для более эффективного предоставления информации. Конечно, каждый может принять участие в выпуске новой вики, добро пожаловать к нам!',
        es : 'Nuestra base de datos wiki no solo está preconfigurada, sino que seleccionamos las mejores partes de los problemas populares de la comunidad, las organizamos y las colocamos en la base de datos de la wiki para proporcionar información de manera más eficiente. Por supuesto, todos pueden participar en el lanzamiento del nuevo wiki. ¡Bienvenido a unirse a nosotros!',
        fr: "Notre base de données wiki n'est pas simplement préconfigurée, nous sélectionnons les meilleures parties des problèmes populaires rencontrés par la communauté, nous les organisons et nous les mettons dans la base de données du wiki pour fournir des informations plus efficacement. Bien sûr, tout le monde peut participer à la publication du nouveau wiki, nous vous invitons à nous rejoindre!",
        de: 'Unsere Wiki-Datenbank ist nicht nur vorkonfiguriert, wir suchen die besten Teile der gängigen Community-Themen heraus, organisieren sie und stellen sie in die Wiki-Datenbank, um Informationen effizienter bereitzustellen. Natürlich kann jeder an der Veröffentlichung des neuen Wikis teilnehmen. Willkommen bei uns!',
        cn: '我们的维基数据库不仅是预先设置好的文档，我们会从热门的社区问题中挑选出精华的部分，将他们整理，然后放入维基的数据库以便更高效地提供信息。当然，所有人都能参与新的维基的发布，欢迎加入我们',
        cnt : '我們的維基數據庫不光是預先設置好的文檔，我們會從熱門的社區問題中挑選出精華的部分，將他們整理，然後放入維基的數據庫以便更高效地提供信息。當然，所有人都能參與新的維基的發布，歡迎加入我們！'
    },{
        en : 'Register & Login',
        ru : 'Зарегистрироваться и Войти',
        es : 'Registrarse y Entrar',
        fr: "Inscrivez-vous et connectez-vous",
        de: 'Registrieren & Einloggen',
        cn: '注册和登录',
        cnt : '註冊和登錄'
    },{
        en : 'Register and log in to your account and you will be able to participate in the Q&A and Encyclopedia database building of the community built on the Disqus plugin.',
        ru : 'Зарегистрируйтесь и войдите в свою учетную запись, и вы сможете участвовать в построении базы данных сообщества «Вопросы и ответы» и «Энциклопедия» на основе плагина Disqus.',
        es : 'Regístrese e inicie sesión en su cuenta y podrá participar en la base de datos de Preguntas y Respuestas y la Enciclopedia de la comunidad creada en el complemento Disqus.',
        fr: "Inscrivez-vous et connectez-vous à votre compte et vous pourrez participer à la construction de la base de données Q & A et Encyclopedia de la communauté construite sur le plugin Disqus.",
        de: 'Registrieren Sie sich und melden Sie sich in Ihrem Konto an. Sie können dann am Aufbau der Q & A- und Encyclopedia-Datenbank der auf dem Disqus-Plugin basierenden Community teilnehmen.',
        cn: '注册并登陆您的账号，您将能参与到基于Disqus插件构建的社区的问答和百科数据库的建设。',
        cnt : '註冊並登陸您的賬號，您將能參與到基於Disqus插件構建的社區的問答和百科數據庫的建設。'
    },{
        en : 'Welcome Back',
        cn : '欢迎回来',
        es : 'Dar una buena acogida',
        fr : 'Nous saluons le retour',
        de : 'Willkommen zurück',
        cnt : '歡迎回來',
        ru : 'Добро пожаловать обратно'
    },{
        en : 'Signin now there is lot of new stuff waiting for you',
        cn : '欢迎回来,现在有很多新东西等着你',
        es : 'Bienvenido de nuevo, inicia sesión ahora hay muchas novedades que te esperan',
        fr : 'Bienvenue à vous connecter maintenant il y a beaucoup de nouvelles choses qui vous attendent\n',
        de : 'Willkommen zurück, melde dich an, jetzt warten viele neue Dinge auf dich',
        cnt : '歡迎回來,現在有很多新東西等著你',
        ru : 'С возвращением, войдите, сейчас вас ждет много нового'
    },{
        en : 'Create New Account',
        cn : '创建新帐号',
        es : 'Crear una nueva cuenta',
        fr : 'Créer un nouveau compte',
        de : 'Neuen Account erstellen',
        cnt : '建立新帳戶 ',
        ru : 'Создать новый аккаунт'
    },{
        en : 'Join Our wonderful community and let others help you without a single penny',
        cn : '加入我们精彩的社区，提供无偿帮助。',
        es : 'Bienvenido de nuevo, inicia sesión ahora hay muchas novedades que te esperan',
        fr : 'Bienvenue à vous connecter maintenant il y a beaucoup de nouvelles choses qui vous attendent',
        de : 'Treten Sie unserer wunderbaren Community bei und lassen Sie sich von anderen ohne einen einzigen Cent helfen',
        cnt : '加入我們精彩的社區，提供無償幫助',
        ru : 'С возвращением, войдите, сейчас вас ждет много нового'
    },{
        en : 'still not got an account yet ? Get one~',
        cn : '还没有账号吗？ 注册一个〜',
        es : '¿Todavía no tienes una cuenta? Conseguir uno ~',
        fr : 'Vous n\'avez pas encore de compte? Obtenez un ~',
        de : 'Noch keinen Account? Holen Sie sich einen ~',
        cnt : '還沒有賬號嗎？ 得到一個〜',
        ru : 'Вы еще не получили аккаунт? Получить один ~'
    },{
        en : 'Title',
        cn : '标题',
        es : 'Título',
        fr : 'Titre',
        de : 'Titel',
        cnt : '標題',
        ru : 'заглавие'
    },{
        en : 'Tag',
        cn : '标签',
        es : 'Etiqueta',
        fr : 'Étiquette',
        de : 'Etikett',
        cnt : '標籤',
        ru : 'Тег'
    },{
        en : 'Summary',
        cn : '摘要',
        es : 'Resumen',
        fr : 'Résumé',
        de : 'Zusammenfassung',
        cnt : '摘要',
        ru : 'Резюме'
    },{
        en : 'Content',
        cn : '内容',
        es : 'Contenido',
        fr : 'Contenu',
        de : 'Inhalt',
        cnt : '內容',
        ru : 'содержание'
    },{
        en : 'submit',
        cn : '提交',
        es : 'enviar',
        fr : 'soumettre',
        de : 'einreichen',
        cnt : '提交',
        ru : 'Отправить'
    }

];
