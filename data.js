var APP_DATA = {
  "scenes": [
    {
      "id": "0-sf-33_wellhead--pipeline",
      "name": "SF-33_Wellhead & Pipeline",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": -0.03372013397578755,
        "pitch": 0.06019625072868351,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": 0.0009597175132665114,
          "pitch": 0.5676917182743288,
          "rotation": 0,
          "target": "1-sf-33_wellhead"
        },
        {
          "yaw": -0.7743160837322751,
          "pitch": 0.12596644859414496,
          "rotation": 0,
          "target": "2-sf-33_sucker-rod-pumping-system"
        },
        {
          "yaw": 2.8239893853133893,
          "pitch": 0.10964984496842334,
          "rotation": 0,
          "target": "9-sf-33_well-pad-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sf-33_wellhead",
      "name": "SF-33_Wellhead",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.423423798154996,
          "pitch": 0.3362516396976645,
          "rotation": 0,
          "target": "0-sf-33_wellhead--pipeline"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sf-33_sucker-rod-pumping-system",
      "name": "SF-33_Sucker rod pumping system",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 0.04046416077097703,
        "pitch": -0.27435598889802826,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": 1.1507567438165456,
          "pitch": 0.14168630690324946,
          "rotation": 0,
          "target": "0-sf-33_wellhead--pipeline"
        },
        {
          "yaw": 1.8311772011537606,
          "pitch": 0.23584768437546444,
          "rotation": 0,
          "target": "3-sf-33_wellhead--sucker-rod-pumping-system"
        },
        {
          "yaw": -2.336783621730744,
          "pitch": 0.16546010537690847,
          "rotation": 0,
          "target": "5-sf-33_old-tansformer"
        },
        {
          "yaw": -0.8788386220590176,
          "pitch": 0.06291475844501271,
          "rotation": 0,
          "target": "4-sf-33_concrete-pad"
        },
        {
          "yaw": 1.561381402988813,
          "pitch": 0.11337817315948229,
          "rotation": 0,
          "target": "9-sf-33_well-pad-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sf-33_wellhead--sucker-rod-pumping-system",
      "name": "SF-33_Wellhead & Sucker rod pumping system",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": -0.00334515708722094,
        "pitch": -0.1829500729743252,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": -0.4366300094158202,
          "pitch": 0.1754979387536615,
          "rotation": 0,
          "target": "2-sf-33_sucker-rod-pumping-system"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-sf-33_concrete-pad",
      "name": "SF-33_Concrete Pad",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 0.27987711199926935,
        "pitch": 0.05909095120156849,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": 0.7478538011757401,
          "pitch": 0.12741681401054805,
          "rotation": 0,
          "target": "2-sf-33_sucker-rod-pumping-system"
        },
        {
          "yaw": -2.7211716249219453,
          "pitch": 0.13715211987657838,
          "rotation": 0,
          "target": "6-sf-33_well-pad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sf-33_old-tansformer",
      "name": "SF-33_Old Tansformer",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 0.32371328616784467,
        "pitch": -0.04630480825283456,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": -2.623478254731573,
          "pitch": 0.13693197841135252,
          "rotation": 0,
          "target": "2-sf-33_sucker-rod-pumping-system"
        },
        {
          "yaw": 1.966321441938443,
          "pitch": 0.058681879909746826,
          "rotation": 0,
          "target": "6-sf-33_well-pad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-sf-33_well-pad",
      "name": "SF-33_Well Pad",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 2.1520028164396017,
        "pitch": 0.2635472640845222,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": -2.855153715932193,
          "pitch": 0.12083412529633542,
          "rotation": 0,
          "target": "5-sf-33_old-tansformer"
        },
        {
          "yaw": 2.5893362051416613,
          "pitch": 0.12203953850509386,
          "rotation": 0,
          "target": "4-sf-33_concrete-pad"
        },
        {
          "yaw": 0.7367151375078116,
          "pitch": 0.02695831983809782,
          "rotation": 0,
          "target": "7-sf-33_well-pad-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-sf-33_well-pad-1",
      "name": "SF-33_Well Pad 1",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 2.5889085276733557,
        "pitch": 0.12733822269527906,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": -2.623805093803517,
          "pitch": 0.10147604882504702,
          "rotation": 0,
          "target": "6-sf-33_well-pad"
        },
        {
          "yaw": 2.2217652104214647,
          "pitch": 0.0623313216371173,
          "rotation": 0,
          "target": "8-sf-33_well-pad-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-sf-33_well-pad-2",
      "name": "SF-33_Well Pad 2",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.433099177487902,
          "pitch": 0.09710715848854612,
          "rotation": 0,
          "target": "7-sf-33_well-pad-1"
        },
        {
          "yaw": -0.39386550999210357,
          "pitch": -0.0025755706622110353,
          "rotation": 0,
          "target": "9-sf-33_well-pad-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-sf-33_well-pad-3",
      "name": "SF-33_Well Pad 3",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": -2.449042854790843,
        "pitch": 0.36471985430745235,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": -1.9352691253608985,
          "pitch": 0.09496997580853694,
          "rotation": 0,
          "target": "8-sf-33_well-pad-2"
        },
        {
          "yaw": -2.9661458231244513,
          "pitch": 0.22891212235599667,
          "rotation": 0,
          "target": "0-sf-33_wellhead--pipeline"
        },
        {
          "yaw": 3.0818935086705377,
          "pitch": 0.1021653926930135,
          "rotation": 0,
          "target": "2-sf-33_sucker-rod-pumping-system"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "WELL PAD SF-33",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
