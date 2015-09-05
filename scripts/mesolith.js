
"use strict";

var CryptoCrystalline = {

felsite: [
  [1,0,1,0,1,0,1,1,0,1,0,1,1],
  [1,0,1,0,0,1,1,1,0,1,0,1,1],
  [1,0,1,0,1,1,1,0,0,1,0,1,1],
  [1,0,0,0,1,1,1,1,0,1,0,1,1],
  [1,0,1,0,1,1,1,1,0,0,0,1,1],
  [1,0,1,0,1,0,1,1,0,1,1,0,1],
  [0,0,1,0,0,1,1,1,0,1,1,1,0],
  [1,0,1,0,1,1,1,0,0,0,1,1,1],
  [1,0,0,0,1,1,1,0,0,1,1,1,1],
  [1,0,0,0,1,1,1,1,0,0,1,1,1],
  [1,0,1,1,0,0,1,1,0,1,0,1,1],
  [1,0,1,1,0,0,1,1,0,1,1,0,1],
  [1,0,0,1,0,1,1,1,0,1,0,1,1],
  [1,0,1,1,1,0,1,0,0,1,1,0,1],
  [0,0,1,1,0,1,1,1,0,1,0,1,0],
  [1,0,1,1,1,0,1,1,0,0,1,0,1],
  [0,0,1,1,1,0,1,1,0,1,1,0,0],
  [1,0,1,1,0,1,1,1,0,0,0,1,1],
  [0,0,1,1,0,1,1,1,1,0,0,1,0],
  [1,0,0,1,0,0,1,1,1,1,0,1,1],
  [1,0,1,1,0,0,1,0,1,1,0,1,1],
  [1,0,1,1,0,1,1,0,1,0,0,1,1],
  [1,0,1,0,1,0,1,1,1,0,0,1,1],
  [1,0,1,1,0,0,1,1,1,0,0,1,1],
  [1,0,1,1,0,0,1,1,1,0,1,0,1],
  [1,0,1,0,1,0,1,1,1,0,1,0,1],
  [1,0,1,0,0,1,1,1,1,0,1,0,1],
  [1,0,1,0,1,0,1,1,1,1,0,0,1],
  [1,0,1,0,0,1,1,1,1,0,0,1,1],
  [1,0,1,1,0,0,1,1,1,1,0,0,1],
  [1,0,0,1,0,1,1,1,1,0,0,1,1],
  [0,0,1,1,0,0,1,1,1,1,0,1,0],
  [0,0,1,1,0,0,1,1,1,1,1,0,0],
  [1,0,0,0,1,1,1,1,1,0,0,1,1],
  [1,0,1,0,0,1,1,1,1,1,0,0,1],
  [1,0,1,0,0,1,1,1,0,1,1,0,1],
  [1,0,1,1,0,1,1,1,0,0,1,0,1],
  [0,0,1,1,0,1,1,1,0,1,1,0,0],
  [1,0,1,1,0,0,1,1,0,0,1,1,1],
  [0,0,1,1,0,1,1,1,0,0,1,1,0],
  [1,0,1,0,0,1,1,1,0,0,1,1,1],
  [1,0,0,1,0,1,1,1,0,0,1,1,1]],

rhyolite: [
  [1,0,1,0,1,0,1,1,0,1,0,1,1],
  [1,1,0,0,1,0,1,1,0,1,0,1,1],
  [1,1,1,0,1,0,1,1,0,1,0,0,1],
  [1,1,1,0,0,0,1,1,0,1,0,1,1],
  [1,1,1,0,1,0,1,1,0,0,0,1,1],
  [1,0,1,0,1,0,1,0,1,1,0,1,1],
  [1,1,0,0,1,0,0,1,1,1,0,1,1],
  [1,1,1,0,1,0,1,1,1,0,0,0,1],
  [1,1,1,0,0,0,1,1,1,1,0,0,1],
  [1,1,1,0,0,0,1,1,1,0,0,1,1],
  [1,0,0,1,1,0,1,1,0,1,0,1,1],
  [1,0,0,1,1,0,1,0,1,1,0,1,1],
  [1,1,0,1,0,0,1,1,0,1,0,1,1],
  [1,0,1,1,1,0,1,0,1,1,0,0,1],
  [1,1,0,1,1,0,0,1,0,1,0,1,1],
  [1,0,1,1,1,0,1,0,1,0,0,1,1],
  [1,0,1,1,1,0,0,0,1,1,0,1,1],
  [1,1,0,1,1,0,1,1,0,0,0,1,1],
  [1,1,0,1,1,0,0,1,0,0,1,1,1],
  [1,0,0,1,0,0,1,1,0,1,1,1,1],
  [1,0,0,1,1,0,1,1,0,1,1,0,1],
  [1,1,0,1,1,0,1,1,0,0,1,0,1],
  [1,0,1,0,1,0,1,1,0,0,1,1,1],
  [1,0,0,1,1,0,1,1,0,0,1,1,1],
  [1,0,0,1,1,0,1,0,1,0,1,1,1],
  [1,0,1,0,1,0,1,0,1,0,1,1,1],
  [1,1,0,0,1,0,1,0,1,0,1,1,1],
  [1,0,1,0,1,0,1,0,0,1,1,1,1],
  [1,1,0,0,1,0,1,1,0,0,1,1,1],
  [1,0,0,1,1,0,1,0,0,1,1,1,1],
  [1,1,0,1,0,0,1,1,0,0,1,1,1],
  [1,0,0,1,1,0,0,1,0,1,1,1,1],
  [1,0,0,1,1,0,0,0,1,1,1,1,1],
  [1,1,1,0,0,0,1,1,0,0,1,1,1],
  [1,1,0,0,1,0,1,0,0,1,1,1,1],
  [1,1,0,0,1,0,1,0,1,1,0,1,1],
  [1,1,0,1,1,0,1,0,1,0,0,1,1],
  [1,1,0,1,1,0,0,0,1,1,0,1,1],
  [1,0,0,1,1,0,1,1,1,0,0,1,1],
  [1,1,0,1,1,0,0,1,1,0,0,1,1],
  [1,1,0,0,1,0,1,1,1,0,0,1,1],
  [1,1,0,1,0,0,1,1,1,0,0,1,1]],

quartzite: [
 ['n0','k6','j17','k6x5','j17y2','j3',
  'j34k6','j17k2','n26y5','k26x5','j6','j36',
  'k56','j136y7','k56x4','n167x4','j3k5x4','j167y2',
  'j2k56x4','k157x6','k1j6','n345','j2','j26',
  'j236','j23','j23k6','j2y3','j2k6','j26y3',
  'j2k56','j246y3','j26y34','j2k6x5','j2k6y3','j3k6',
  'n45y2','j3k56x4','k2j6','n5y2','k26','k256'],

 ['n8','j5','k34','j5y6','k34x2','k1',
  'k17j5','j2k34','n25x6','j25y6','k5','k15',
  'j56','k135x4','j56y7','n345y7','k1j6y7','k345x2',
  'k2j56y7','j346y5','j3k5','n167','k2','k25',
  'k125','k12','k12j5','k2x1','k2j5','k25x1',
  'k2j56','k257x1','k25x17','k2j5y6','k2j5x1','k1j5',
  'n67x2','k1j56y7','j2k5','n6x2','j25','j256']]

};

