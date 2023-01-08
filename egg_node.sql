/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50734 (5.7.34)
 Source Host           : 127.0.0.1:3306
 Source Schema         : egg_node

 Target Server Type    : MySQL
 Target Server Version : 50734 (5.7.34)
 File Encoding         : 65001

 Date: 08/01/2023 09:55:18
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for long_admins
-- ----------------------------
DROP TABLE IF EXISTS `long_admins`;
CREATE TABLE `long_admins` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `account` varchar(50) NOT NULL,
  `real_name` varchar(50) DEFAULT NULL,
  `password` varchar(64) NOT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `token_expire` datetime DEFAULT NULL,
  `role_id` int(4) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of long_admins
-- ----------------------------
BEGIN;
INSERT INTO `long_admins` (`id`, `account`, `real_name`, `password`, `phone`, `token`, `token_expire`, `role_id`, `created_at`, `updated_at`, `deleted_at`) VALUES (1, 'admin', '管理员', '123', '15205191196', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsImFnZSI6MzAsImlhdCI6MTY3MTI0MjE2OH0.knOba2-_syhkVL7BpSPR89GP2kqEvP_7kBy3bzDMS8M', '2022-12-15 17:16:31', 1, '2022-09-16 10:28:59', '2022-12-15 09:16:31', NULL);
INSERT INTO `long_admins` (`id`, `account`, `real_name`, `password`, `phone`, `token`, `token_expire`, `role_id`, `created_at`, `updated_at`, `deleted_at`) VALUES (2, 'test', 'test', '123', '18721263856', 'VNuYzDsz4Qt6wG3WRm9MPXO7gXX3z0hmVdMPMrPr3c4h5tlpJhjGTxcvpnZrcGFN', '2022-11-29 17:10:50', 2, '2022-09-18 04:54:39', '2022-11-29 09:10:50', NULL);
INSERT INTO `long_admins` (`id`, `account`, `real_name`, `password`, `phone`, `token`, `token_expire`, `role_id`, `created_at`, `updated_at`, `deleted_at`) VALUES (3, 'wang', 'wang', '123', '15205191196', NULL, NULL, 3, '2022-09-18 08:20:23', '2022-11-07 21:39:16', NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
