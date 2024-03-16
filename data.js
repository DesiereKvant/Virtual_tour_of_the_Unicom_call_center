var APP_DATA = {
  "scenes": [
    {
      "id": "0---7",
      "name": "ул. Советская, 7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.8957145167995595,
        "pitch": -0.1054216896165805,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.8598339610085617,
          "pitch": 0.10355243359676791,
          "rotation": 0,
          "target": "1----"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.7762321833046535,
          "pitch": 0.03200858181567767,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">где это?</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">там Додо пицца и остановка \"Площадь Ленина\"&nbsp;</font></font></font></font></font></font>"
        },
        {
          "yaw": 0.6806023018761636,
          "pitch": -0.1511312370346385,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">туда нам надо</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">колл-центр находится именно в этом здании на Набережной Великой, 6</font></font></font></font>"
        }
      ]
    },
    {
      "id": "1----",
      "name": "Идем в колл-центр",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 1.5311389409626024,
        "pitch": -0.05092413992046119,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.3416928903969918,
          "pitch": 0.17635177230102528,
          "rotation": 0,
          "target": "2----6"
        },
        {
          "yaw": -1.864943265028172,
          "pitch": 0.19535894252975083,
          "rotation": 0,
          "target": "0---7"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9342468290422197,
          "pitch": -0.26982608993334267,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Колл-центр тут</font></font></font></font>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2----6",
      "name": "Набережная реки Великой 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 2.1147971130718686,
        "pitch": -0.03651209255704302,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 2.0954148809513846,
          "pitch": -0.06622988738540414,
          "rotation": 0,
          "target": "3-"
        },
        {
          "yaw": -0.8966716773429297,
          "pitch": 0.15992604950061917,
          "rotation": 0,
          "target": "1----"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.3359486762057724,
          "pitch": -0.08323401193915458,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">сюда!</font></font>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-",
      "name": "Холл",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11650121061077279,
          "pitch": 0.21951263089486872,
          "rotation": 0,
          "target": "4-----1-"
        },
        {
          "yaw": 2.559754145851654,
          "pitch": 0.24253801601781078,
          "rotation": 0,
          "target": "2----6"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.065353432414147,
          "pitch": 0.5235433758034507,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">мы внутри</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">осталось пройти охранника и подняться на 3 этаж</font></font></font></font>"
        }
      ]
    },
    {
      "id": "4-----1-",
      "name": " Поднимаемся по лестнице: 1 этаж",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 2.9085859144848767,
        "pitch": -0.14457285164041878,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 3.0470640497289425,
          "pitch": -0.1102281457435268,
          "rotation": 0,
          "target": "5-----2-"
        },
        {
          "yaw": 1.0978550598627859,
          "pitch": 0.28509501945394433,
          "rotation": 0,
          "target": "3-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.910706626774858,
          "pitch": -0.26996531659552403,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">поднимаемся выше</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">мы скоро прийдем</font></font>"
        }
      ]
    },
    {
      "id": "5-----2-",
      "name": " Поднимаемся по лестнице: 2 этаж",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -1.1881940255603496,
        "pitch": -0.16275629274140968,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.099962994304093,
          "pitch": -0.1085161502666061,
          "rotation": 0,
          "target": "6-----3-"
        },
        {
          "yaw": 0.20036779454312814,
          "pitch": 0.6465814909643193,
          "rotation": 0,
          "target": "4-----1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.010613752279313715,
          "pitch": 0.5049618735835502,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">вернуться вниз</font></font>",
          "text": "Text"
        },
        {
          "yaw": -2.894380485195068,
          "pitch": 0.4765139188008991,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">сюда нам не надо</font></font><div><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><br></font></font></div>",
          "text": "Text"
        },
        {
          "yaw": -1.2989044966901258,
          "pitch": -0.2527132883134158,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">а сюда нам надо!</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">поднимаемся на 3 этаж</font></font>"
        }
      ]
    },
    {
      "id": "6-----3-",
      "name": " Поднимаемся по лестнице: 3 этаж",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -0.538615105362215,
        "pitch": -0.10912069626981591,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.8258780828821166,
          "pitch": 0.3105188193673385,
          "rotation": 0,
          "target": "7-"
        },
        {
          "yaw": 0.21081220301426917,
          "pitch": 0.5361391405786158,
          "rotation": 0,
          "target": "5-----2-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.17166128535092895,
          "pitch": 0.4250207643185302,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Спуск на 2 этаж</font></font></font></font></font></font></font></font><div><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><br></font></font></div>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "7-",
      "name": "Развилка",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.5494693698558262,
        "pitch": 0.015294627256626114,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.4331140315769506,
          "pitch": 0.079939676472641,
          "rotation": 0,
          "target": "8---"
        },
        {
          "yaw": -0.4118125744376062,
          "pitch": 0.09636829636799327,
          "rotation": 0,
          "target": "9-----1"
        },
        {
          "yaw": -2.7695018891125915,
          "pitch": 0.2647721530491651,
          "rotation": 0,
          "target": "14-"
        },
        {
          "yaw": 2.9718573129867156,
          "pitch": 0.2620044675729307,
          "rotation": 0,
          "target": "6-----3-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.7651131030149347,
          "pitch": 0.11001162932716824,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Кухня</font></font></font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Там можно вкусно поесть и поиграть в теннис</font></font></font></font></font></font><div><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><br></font></font></font></font></font></font></div>"
        },
        {
          "yaw": 1.21502146618832,
          "pitch": -0.10873121485440684,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Комната обучения</font></font></font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Здесь происходит процесс обучения новичков</font></font></font></font>"
        },
        {
          "yaw": -0.5703044226936935,
          "pitch": -0.08736101536142016,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Офис</font></font></font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Здесь кипит очень бурная работа</font></font></font></font>"
        }
      ]
    },
    {
      "id": "8---",
      "name": "Комната обучения ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 1.0535445034210777,
        "pitch": 0.013079576329895204,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 2.3532095630214034,
          "pitch": 0.15106551480360153,
          "rotation": 0,
          "target": "7-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-----1",
      "name": "Гуляем по офису, локация 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3160416488545525,
          "pitch": 0.301750322007706,
          "rotation": 0,
          "target": "10-----2"
        },
        {
          "yaw": -2.318468895251957,
          "pitch": 0.27060691172101414,
          "rotation": 0,
          "target": "7-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.1084551975661228,
          "pitch": 0.025538942338130255,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Выход из офиса</font></font></font></font>",
          "text": "Text"
        },
        {
          "yaw": -1.3928357841627026,
          "pitch": 0.0866319303255203,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Шкаф</font></font></font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Для вашей верней одежды и обуви</font></font></font></font>"
        },
        {
          "yaw": -0.7848309475146547,
          "pitch": 0.2669845869847336,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Пуфики</font></font></font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Мягкие пуфики, чтобы вы могли переобуться в комфортную обувь!</font></font><br><div><br></div>"
        },
        {
          "yaw": -0.37256940092355073,
          "pitch": 0.14782673082464726,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Лимон</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Заботливо выращенные и всеми любимые лимончики</font></font>"
        }
      ]
    },
    {
      "id": "10-----2",
      "name": "Гуляем по офису, локация 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4243878547460511,
          "pitch": 0.2809267031523355,
          "rotation": 0,
          "target": "11-----3"
        },
        {
          "yaw": -1.7112344038599225,
          "pitch": 0.3708686877188576,
          "rotation": 0,
          "target": "9-----1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8426269083570332,
          "pitch": 0.017908229765282613,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Пурифайер&nbsp;</font></font>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "11-----3",
      "name": "Гуляем по офису, локация 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -2.0860781933864505,
        "pitch": 0.23024592448621028,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.6343563331482578,
          "pitch": 0.1549942903589816,
          "rotation": 0,
          "target": "12--"
        },
        {
          "yaw": 1.0012038547275424,
          "pitch": 0.20080620584105446,
          "rotation": 0,
          "target": "13-----4"
        },
        {
          "yaw": -2.7936504862713214,
          "pitch": 0.2804341412110176,
          "rotation": 0,
          "target": "10-----2"
        },
        {
          "yaw": -2.085994644886643,
          "pitch": 0.23449712657970423,
          "rotation": 0,
          "target": "9-----1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6953808459405995,
          "pitch": 0.011809085391977447,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Место работы</font></font></font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Можно посмотреть глазами сотрудника</font></font></font></font>"
        }
      ]
    },
    {
      "id": "12--",
      "name": "Рабочее место",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 2.0303788383024663,
        "pitch": 0.3353503969423315,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.459328151534139,
          "pitch": 0.2406332504540476,
          "rotation": 0,
          "target": "11-----3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-----4",
      "name": "Гуляем по офису, локация 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0370168169182676,
          "pitch": 0.30428804374595764,
          "rotation": 0,
          "target": "11-----3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-",
      "name": "Кухня",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6967493554372872,
          "pitch": 0.022001094340456717,
          "rotation": 0,
          "target": "7-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.719166103773258,
          "pitch": -0.10687351514176058,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Выход обратно</font></font></font></font>",
          "text": "Text"
        },
        {
          "yaw": 1.6287389585393672,
          "pitch": 0.18318368780584038,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Теннисный стол&nbsp;</font></font></font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">В нашей работе важно иметь возможность размяться и отдохнуть. Теннистый стол - отличное решение</font></font>"
        },
        {
          "yaw": 0.47975815382845965,
          "pitch": 0.15895789322226683,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Пурифайер&nbsp;</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Поможет вам приготовить кофе или чай. </font></font></font></font></font></font></font><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Местный бариста.</font></font></font></font></font></font></font></font></font></font>"
        },
        {
          "yaw": -0.7247704611467878,
          "pitch": -0.02918369590918246,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Шкаф</font></font></font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Для вашей посуды</font></font>"
        },
        {
          "yaw": -0.015542803305208963,
          "pitch": -0.1215153979066983,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Холодильники</font></font></font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Всегда свободны для вашей еды</font></font></font></font>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
