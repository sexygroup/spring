-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: springdb
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT = @@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS = @@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION = @@COLLATION_CONNECTION */;
SET NAMES utf8;
/*!40103 SET @OLD_TIME_ZONE = @@TIME_ZONE */;
/*!40103 SET TIME_ZONE = '+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS, UNIQUE_CHECKS = 0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS = 0 */;
/*!40101 SET @OLD_SQL_MODE = @@SQL_MODE, SQL_MODE = 'NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES = @@SQL_NOTES, SQL_NOTES = 0 */;

--
-- Temporary view structure for view `all_card_client_view`
--

DROP TABLE IF EXISTS `all_card_client_view`;
/*!50001 DROP VIEW IF EXISTS `all_card_client_view`*/;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `all_card_client_view` AS
SELECT 1 AS `card_id`,
       1 AS `card_referrer`,
       1 AS `card_password`,
       1 AS `card_question`,
       1 AS `card_answer`,
       1 AS `card_money`,
       1 AS `card_point`,
       1 AS `card_delete_date`,
       1 AS `client_id`,
       1 AS `client_is_holder`,
       1 AS `client_name`,
       1 AS `client_gender`,
       1 AS `client_age`,
       1 AS `client_phone`,
       1 AS `client_delete_date`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `all_card_recharge_view`
--

DROP TABLE IF EXISTS `all_card_recharge_view`;
/*!50001 DROP VIEW IF EXISTS `all_card_recharge_view`*/;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `all_card_recharge_view` AS
SELECT 1 AS `card_id`,
       1 AS `card_referrer`,
       1 AS `card_password`,
       1 AS `card_question`,
       1 AS `card_answer`,
       1 AS `card_money`,
       1 AS `card_point`,
       1 AS `card_delete_date`,
       1 AS `recharge_id`,
       1 AS `recharge_price`,
       1 AS `recharge_money`,
       1 AS `recharge_date`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `all_card_view`
--

DROP TABLE IF EXISTS `all_card_view`;
/*!50001 DROP VIEW IF EXISTS `all_card_view`*/;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `all_card_view` AS
SELECT 1 AS `card_id`,
       1 AS `card_referrer`,
       1 AS `card_password`,
       1 AS `card_question`,
       1 AS `card_answer`,
       1 AS `card_money`,
       1 AS `card_point`,
       1 AS `card_delete_date`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `all_client_view`
--

DROP TABLE IF EXISTS `all_client_view`;
/*!50001 DROP VIEW IF EXISTS `all_client_view`*/;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `all_client_view` AS
SELECT 1 AS `client_id`,
       1 AS `card_id`,
       1 AS `client_is_holder`,
       1 AS `client_name`,
       1 AS `client_gender`,
       1 AS `client_age`,
       1 AS `client_phone`,
       1 AS `client_delete_date`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `all_consume_detail_view`
--

DROP TABLE IF EXISTS `all_consume_detail_view`;
/*!50001 DROP VIEW IF EXISTS `all_consume_detail_view`*/;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `all_consume_detail_view` AS
SELECT 1 AS `consume_id`,
       1 AS `staff_id`,
       1 AS `card_id`,
       1 AS `client_id`,
       1 AS `service_id`,
       1 AS `consume_price`,
       1 AS `consume_deduct`,
       1 AS `consume_money`,
       1 AS `consume_point`,
       1 AS `consume_rebate_price`,
       1 AS `consume_rebate_point`,
       1 AS `consume_date`,
       1 AS `staff_is_admin`,
       1 AS `staff_password`,
       1 AS `staff_question`,
       1 AS `staff_answer`,
       1 AS `staff_name`,
       1 AS `staff_phone`,
       1 AS `staff_login`,
       1 AS `staff_delete_date`,
       1 AS `service_name`,
       1 AS `service_price`,
       1 AS `service_rebate`,
       1 AS `service_delete_date`,
       1 AS `card_referrer`,
       1 AS `card_password`,
       1 AS `card_question`,
       1 AS `card_answer`,
       1 AS `card_money`,
       1 AS `card_point`,
       1 AS `card_delete_date`,
       1 AS `client_is_holder`,
       1 AS `client_name`,
       1 AS `client_gender`,
       1 AS `client_age`,
       1 AS `client_phone`,
       1 AS `client_delete_date`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `all_rebate_detail_view`
--

DROP TABLE IF EXISTS `all_rebate_detail_view`;
/*!50001 DROP VIEW IF EXISTS `all_rebate_detail_view`*/;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `all_rebate_detail_view` AS
SELECT 1 AS `consume_id`,
       1 AS `staff_id`,
       1 AS `card_id`,
       1 AS `client_id`,
       1 AS `service_id`,
       1 AS `consume_price`,
       1 AS `consume_deduct`,
       1 AS `consume_money`,
       1 AS `consume_point`,
       1 AS `consume_rebate_price`,
       1 AS `consume_rebate_point`,
       1 AS `consume_date`,
       1 AS `staff_is_admin`,
       1 AS `staff_password`,
       1 AS `staff_question`,
       1 AS `staff_answer`,
       1 AS `staff_name`,
       1 AS `staff_phone`,
       1 AS `staff_login`,
       1 AS `staff_delete_date`,
       1 AS `service_name`,
       1 AS `service_price`,
       1 AS `service_rebate`,
       1 AS `service_delete_date`,
       1 AS `card_referrer`,
       1 AS `card_password`,
       1 AS `card_question`,
       1 AS `card_answer`,
       1 AS `card_money`,
       1 AS `card_point`,
       1 AS `card_delete_date`,
       1 AS `client_is_holder`,
       1 AS `client_name`,
       1 AS `client_gender`,
       1 AS `client_age`,
       1 AS `client_phone`,
       1 AS `client_delete_date`,
       1 AS `referrer_card_id`,
       1 AS `referrer_card_referrer`,
       1 AS `referrer_card_password`,
       1 AS `referrer_card_question`,
       1 AS `referrer_card_answer`,
       1 AS `referrer_card_money`,
       1 AS `referrer_card_point`,
       1 AS `referrer_card_delete_date`,
       1 AS `referrer_client_id`,
       1 AS `referrer_client_is_holder`,
       1 AS `referrer_client_name`,
       1 AS `referrer_client_gender`,
       1 AS `referrer_client_age`,
       1 AS `referrer_client_phone`,
       1 AS `referrer_client_delete_date`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `all_service_view`
--

DROP TABLE IF EXISTS `all_service_view`;
/*!50001 DROP VIEW IF EXISTS `all_service_view`*/;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `all_service_view` AS
SELECT 1 AS `service_id`,
       1 AS `service_name`,
       1 AS `service_price`,
       1 AS `service_rebate`,
       1 AS `service_delete_date`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `all_staff_view`
--

DROP TABLE IF EXISTS `all_staff_view`;
/*!50001 DROP VIEW IF EXISTS `all_staff_view`*/;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `all_staff_view` AS
SELECT 1 AS `staff_id`,
       1 AS `staff_is_admin`,
       1 AS `staff_password`,
       1 AS `staff_name`,
       1 AS `staff_phone`,
       1 AS `staff_question`,
       1 AS `staff_answer`,
       1 AS `staff_login`,
       1 AS `staff_delete_date`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `card`
--

DROP TABLE IF EXISTS `card`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
SET character_set_client = utf8mb4;
CREATE TABLE `card`
(
    `card_id`       int(11)                                                       NOT NULL AUTO_INCREMENT,
    `card_referrer` int(11)                                                                DEFAULT NULL COMMENT '推荐人卡号',
    `card_password` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci  NOT NULL DEFAULT '0000' COMMENT '消费密码',
    `card_question` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '密保问题',
    `card_answer`   varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '密保答案',
    `card_money`    decimal(10, 2)                                                NOT NULL DEFAULT '0.00' COMMENT '余额',
    `card_point`    decimal(10, 2)                                                NOT NULL DEFAULT '0.00' COMMENT '积分',
    PRIMARY KEY (`card_id`) USING BTREE,
    KEY `card_ibfk_1` (`card_referrer`),
    CONSTRAINT `card_ibfk_1` FOREIGN KEY (`card_referrer`) REFERENCES `card` (`card_id`) ON DELETE SET NULL ON UPDATE RESTRICT
) ENGINE = InnoDB
  AUTO_INCREMENT = 7
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card`
--

LOCK TABLES `card` WRITE;
/*!40000 ALTER TABLE `card`
    DISABLE KEYS */;
INSERT INTO `card`
VALUES (1, NULL, '0000', '嘤嘤嘤？', '嘤嘤嘤！', 92.00, 88.00),
       (2, 1, '0000', '嘤嘤嘤？', '嘤嘤嘤！', 190.00, 100.00),
       (3, 1, '0000', '测试', '测试', 95.00, -5.00);
/*!40000 ALTER TABLE `card`
    ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client = @@character_set_client */;
/*!50003 SET @saved_cs_results = @@character_set_results */;
/*!50003 SET @saved_col_connection = @@collation_connection */;
/*!50003 SET character_set_client = utf8mb4 */;
/*!50003 SET character_set_results = utf8mb4 */;
/*!50003 SET collation_connection = utf8mb4_0900_ai_ci */;
/*!50003 SET @saved_sql_mode = @@sql_mode */;
/*!50003 SET sql_mode = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */;
DELIMITER ;;
/*!50003 CREATE */ /*!50017 DEFINER =`root`@`%`*/ /*!50003 TRIGGER `card_BEFORE_DELETE`
    BEFORE DELETE
    ON `card`
    FOR EACH ROW
BEGIN
    insert into card2
    values (OLD.card_id, OLD.card_referrer, OLD.card_password, OLD.card_question, OLD.card_answer, OLD.card_money,
            OLD.card_point, now());
/*删除卡下客户*/
    delete from client where card_id = OLD.card_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode = @saved_sql_mode */;
/*!50003 SET character_set_client = @saved_cs_client */;
/*!50003 SET character_set_results = @saved_cs_results */;
/*!50003 SET collation_connection = @saved_col_connection */;

--
-- Table structure for table `card2`
--

DROP TABLE IF EXISTS `card2`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
SET character_set_client = utf8mb4;
CREATE TABLE `card2`
(
    `card_id`          int(11) NOT NULL,
    `card_referrer`    int(11)                                                       DEFAULT NULL COMMENT '推荐人卡号',
    `card_password`    varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci  DEFAULT '0000' COMMENT '消费密码',
    `card_question`    varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '密保问题',
    `card_answer`      varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '密保答案',
    `card_money`       decimal(10, 2)                                                DEFAULT '0.00' COMMENT '余额',
    `card_point`       decimal(10, 2)                                                DEFAULT '0.00' COMMENT '积分',
    `card_delete_date` datetime                                                      DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`card_id`) USING BTREE
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card2`
--

LOCK TABLES `card2` WRITE;
/*!40000 ALTER TABLE `card2`
    DISABLE KEYS */;
/*!40000 ALTER TABLE `card2`
    ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `card_client_view`
--

DROP TABLE IF EXISTS `card_client_view`;
/*!50001 DROP VIEW IF EXISTS `card_client_view`*/;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `card_client_view` AS
SELECT 1 AS `card_id`,
       1 AS `card_referrer`,
       1 AS `card_password`,
       1 AS `card_question`,
       1 AS `card_answer`,
       1 AS `card_money`,
       1 AS `card_point`,
       1 AS `client_id`,
       1 AS `client_is_holder`,
       1 AS `client_name`,
       1 AS `client_gender`,
       1 AS `client_age`,
       1 AS `client_phone`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `card_level`
--

DROP TABLE IF EXISTS `card_level`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
SET character_set_client = utf8mb4;
CREATE TABLE `card_level`
(
    `card_level_id`    int(11)                 NOT NULL AUTO_INCREMENT,
    `card_level_price` decimal(10, 2) unsigned NOT NULL DEFAULT '0.00',
    PRIMARY KEY (`card_level_id`) USING BTREE
) ENGINE = InnoDB
  AUTO_INCREMENT = 4
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_level`
--

LOCK TABLES `card_level` WRITE;
/*!40000 ALTER TABLE `card_level`
    DISABLE KEYS */;
INSERT INTO `card_level`
VALUES (1, 50.00),
       (2, 100.00),
       (3, 10.00);
/*!40000 ALTER TABLE `card_level`
    ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
SET character_set_client = utf8mb4;
CREATE TABLE `client`
(
    `client_id`        int(11) NOT NULL AUTO_INCREMENT COMMENT '客户编号',
    `card_id`          int(11) NOT NULL COMMENT '客户卡号',
    `client_is_holder` int(1)  NOT NULL                                              DEFAULT '0' COMMENT '该客户是否持有人，开卡时确定，不能修改',
    `client_name`      varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '客户名称',
    `client_gender`    varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '客户性别',
    `client_age`       varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '客户年龄段',
    `client_phone`     varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '客户手机号',
    PRIMARY KEY (`client_id`) USING BTREE,
    KEY `card_id` (`card_id`),
    CONSTRAINT `client_ibfk_1` FOREIGN KEY (`card_id`) REFERENCES `card` (`card_id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB
  AUTO_INCREMENT = 6
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client`
    DISABLE KEYS */;
INSERT INTO `client`
VALUES (1, 1, 1, '客户名1', '男', '儿童', '17863100001'),
       (2, 2, 0, '客户名2', '女', '青年', '17863100002'),
       (3, 3, 1, '测试', '男', '中年', '17863100003');
/*!40000 ALTER TABLE `client`
    ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client = @@character_set_client */;
/*!50003 SET @saved_cs_results = @@character_set_results */;
/*!50003 SET @saved_col_connection = @@collation_connection */;
/*!50003 SET character_set_client = utf8mb4 */;
/*!50003 SET character_set_results = utf8mb4 */;
/*!50003 SET collation_connection = utf8mb4_0900_ai_ci */;
/*!50003 SET @saved_sql_mode = @@sql_mode */;
/*!50003 SET sql_mode = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */;
DELIMITER ;;
/*!50003 CREATE */ /*!50017 DEFINER =`root`@`%`*/ /*!50003 TRIGGER `client_BEFORE_DELETE`
    BEFORE DELETE
    ON `client`
    FOR EACH ROW
BEGIN
    insert into client2
    values (OLD.client_id, OLD.card_id, OLD.client_is_holder, OLD.client_name, OLD.client_gender, OLD.client_age,
            OLD.client_phone, now());
END */;;
DELIMITER ;
/*!50003 SET sql_mode = @saved_sql_mode */;
/*!50003 SET character_set_client = @saved_cs_client */;
/*!50003 SET character_set_results = @saved_cs_results */;
/*!50003 SET collation_connection = @saved_col_connection */;

--
-- Table structure for table `client2`
--

DROP TABLE IF EXISTS `client2`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
SET character_set_client = utf8mb4;
CREATE TABLE `client2`
(
    `client_id`          int(11) NOT NULL COMMENT '客户编号',
    `card_id`            int(11)                                                       DEFAULT NULL COMMENT '客户卡号',
    `client_is_holder`   int(1)                                                        DEFAULT NULL,
    `client_name`        varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '客户名称',
    `client_gender`      varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '客户性别',
    `client_age`         varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '客户年龄段',
    `client_phone`       varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '客户手机号',
    `client_delete_date` datetime                                                      DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`client_id`) USING BTREE,
    KEY `client_ibfk_1` (`card_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client2`
--

LOCK TABLES `client2` WRITE;
/*!40000 ALTER TABLE `client2`
    DISABLE KEYS */;
/*!40000 ALTER TABLE `client2`
    ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `client_image_left_view`
--

DROP TABLE IF EXISTS `client_image_left_view`;
/*!50001 DROP VIEW IF EXISTS `client_image_left_view`*/;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `client_image_left_view` AS
SELECT 1 AS `client_id`,
       1 AS `card_id`,
       1 AS `client_is_holder`,
       1 AS `client_name`,
       1 AS `client_gender`,
       1 AS `client_age`,
       1 AS `client_phone`,
       1 AS `image_id`,
       1 AS `image_name`,
       1 AS `image_comment`,
       1 AS `image_date`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `consume`
--

DROP TABLE IF EXISTS `consume`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
SET character_set_client = utf8mb4;
CREATE TABLE `consume`
(
    `consume_id`           int(11)        NOT NULL AUTO_INCREMENT COMMENT '账单号',
    `staff_id`             int(11)        NOT NULL COMMENT '收费员工号',
    `card_id`              int(11)        NOT NULL COMMENT '卡号',
    `client_id`            int(11)        NOT NULL COMMENT '客户编号',
    `service_id`           int(11)        NOT NULL COMMENT '服务编号',
    `consume_price`        decimal(10, 2) NOT NULL DEFAULT '0.00' COMMENT '应付金额',
    `consume_deduct`       decimal(10, 2) NOT NULL DEFAULT '0.00' COMMENT '抵扣金额',
    `consume_money`        decimal(10, 2) NOT NULL DEFAULT '0.00' COMMENT '收费后余额(auto)',
    `consume_point`        decimal(10, 2) NOT NULL DEFAULT '0.00' COMMENT '抵扣后积分余额(auto)',
    `consume_rebate_price` decimal(10, 2) NOT NULL DEFAULT '0.00' COMMENT '给推荐人返利积分数(auto)',
    `consume_rebate_point` decimal(10, 2) NOT NULL DEFAULT '0.00' COMMENT '返利后推荐人积分总数(auto)',
    `consume_date`         datetime       NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '消费时间(auto)',
    PRIMARY KEY (`consume_id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 29
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consume`
--

LOCK TABLES `consume` WRITE;
/*!40000 ALTER TABLE `consume`
    DISABLE KEYS */;
INSERT INTO `consume`
VALUES (1, 1, 1, 1, 1, 10.00, 10.00, 100.00, 90.00, 0.00, 0.00, '2019-06-11 15:11:15'),
       (2, 1, 2, 2, 1, 10.00, 0.00, 190.00, 100.00, 5.00, 95.00, '2019-06-11 15:14:09'),
       (3, 3, 3, 3, 3, 10.00, 5.00, -5.00, -5.00, 5.00, 100.00, '2019-06-11 16:51:59'),
       (27, 1, 1, 1, 1, 10.00, 10.00, 100.00, 90.00, 0.00, 0.00, '2019-06-11 18:01:06'),
       (28, 1, 1, 1, 1, 10.00, 2.00, 92.00, 88.00, 0.00, 0.00, '2019-06-12 21:30:09');
/*!40000 ALTER TABLE `consume`
    ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client = @@character_set_client */;
/*!50003 SET @saved_cs_results = @@character_set_results */;
/*!50003 SET @saved_col_connection = @@collation_connection */;
/*!50003 SET character_set_client = utf8mb4 */;
/*!50003 SET character_set_results = utf8mb4 */;
/*!50003 SET collation_connection = utf8mb4_0900_ai_ci */;
/*!50003 SET @saved_sql_mode = @@sql_mode */;
/*!50003 SET sql_mode = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */;
DELIMITER ;;
/*!50003 CREATE */ /*!50017 DEFINER =`root`@`%`*/ /*!50003 TRIGGER `consume_BEFORE_INSERT`
    BEFORE INSERT
    ON `consume`
    FOR EACH ROW
BEGIN
    declare referrer int(11);
/*更新card 修改余额和积分*/
    update card
    set card_money=card_money - NEW.consume_price + NEW.consume_deduct,
        card_point=card_point - NEW.consume_deduct
    where card_id = NEW.card_id;
/*更新NEW 给出消费后余额*/
    set NEW.consume_money = (select card_money from card where card_id = NEW.card_id);
/*更新NEW 给出抵扣后积分余额*/
    set NEW.consume_point = (select card_point from card where card_id = NEW.card_id);
/*更新NEW 求返利积分数，返利后推荐人积分总数*/
    select card_referrer into referrer from card where card_id = NEW.card_id;
    if referrer is null
    then
        set NEW.consume_rebate_price = 0;
        set NEW.consume_rebate_point = 0;
    else
/*求返利积分数*/
        set NEW.consume_rebate_price = (NEW.consume_price - NEW.consume_deduct) *
                                       (select service_rebate from service where service_id = NEW.service_id);
/*修改推荐人积分数*/
        update card set card_point=card_point + NEW.consume_rebate_price where card_id = referrer;
/*获取返利后推荐人积分总数*/
        set NEW.consume_rebate_point = (select card_point from card where card_id = referrer);
    end if;
END */;;
DELIMITER ;
/*!50003 SET sql_mode = @saved_sql_mode */;
/*!50003 SET character_set_client = @saved_cs_client */;
/*!50003 SET character_set_results = @saved_cs_results */;
/*!50003 SET collation_connection = @saved_col_connection */;

--
-- Temporary view structure for view `consume_day_view`
--

DROP TABLE IF EXISTS `consume_day_view`;
/*!50001 DROP VIEW IF EXISTS `consume_day_view`*/;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `consume_day_view` AS
SELECT 1 AS `consume_day`,
       1 AS `day_consume_num`,
       1 AS `day_consume_price`,
       1 AS `day_consume_deduct`,
       1 AS `day_consume_rebate`,
       1 AS `day_client_num`,
       1 AS `day_staff_num`,
       1 AS `day_service_num`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `consume_month_view`
--

DROP TABLE IF EXISTS `consume_month_view`;
/*!50001 DROP VIEW IF EXISTS `consume_month_view`*/;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `consume_month_view` AS
SELECT 1 AS `consume_month`,
       1 AS `month_consume_num`,
       1 AS `month_consume_price`,
       1 AS `month_consume_deduct`,
       1 AS `month_consume_rebate`,
       1 AS `month_client_num`,
       1 AS `month_staff_num`,
       1 AS `month_service_num`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `consume_week_view`
--

DROP TABLE IF EXISTS `consume_week_view`;
/*!50001 DROP VIEW IF EXISTS `consume_week_view`*/;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `consume_week_view` AS
SELECT 1 AS `consume_week`,
       1 AS `week_consume_num`,
       1 AS `week_consume_price`,
       1 AS `week_consume_deduct`,
       1 AS `week_consume_rebate`,
       1 AS `week_client_num`,
       1 AS `week_staff_num`,
       1 AS `week_service_num`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `cost`
--

DROP TABLE IF EXISTS `cost`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
SET character_set_client = utf8mb4;
CREATE TABLE `cost`
(
    `cost_id`    int(11)                 NOT NULL AUTO_INCREMENT,
    `cost_money` decimal(10, 2) unsigned NOT NULL DEFAULT '0.00',
    `cost_date`  date                    NOT NULL,
    PRIMARY KEY (`cost_id`) USING BTREE,
    UNIQUE KEY `cost_date_UNIQUE` (`cost_date`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 14
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cost`
--

LOCK TABLES `cost` WRITE;
/*!40000 ALTER TABLE `cost`
    DISABLE KEYS */;
INSERT INTO `cost`
VALUES (1, 23.00, '2019-06-04'),
       (2, 20.00, '2019-06-11'),
       (4, 10.00, '2019-06-14'),
       (5, 21.00, '2019-06-16'),
       (8, 23.00, '2019-06-05'),
       (9, 0.00, '2019-05-27'),
       (11, 0.00, '2019-06-03'),
       (12, 0.00, '2019-05-31'),
       (13, 0.00, '2019-06-01');
/*!40000 ALTER TABLE `cost`
    ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `cost_month_view`
--

DROP TABLE IF EXISTS `cost_month_view`;
/*!50001 DROP VIEW IF EXISTS `cost_month_view`*/;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `cost_month_view` AS
SELECT 1 AS `cost_month`,
       1 AS `month_cost_num`,
       1 AS `month_cost_money`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `cost_week_view`
--

DROP TABLE IF EXISTS `cost_week_view`;
/*!50001 DROP VIEW IF EXISTS `cost_week_view`*/;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `cost_week_view` AS
SELECT 1 AS `cost_week`,
       1 AS `week_cost_num`,
       1 AS `week_cost_money`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
SET character_set_client = utf8mb4;
CREATE TABLE `image`
(
    `image_id`      int(11)  NOT NULL AUTO_INCREMENT,
    `client_id`     int(11)  NOT NULL COMMENT '客户编号',
    `image_name`    varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '图片名',
    `image_comment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '描述',
    `image_date`    datetime NOT NULL                                             DEFAULT CURRENT_TIMESTAMP COMMENT '图片上传时间',
    PRIMARY KEY (`image_id`) USING BTREE,
    KEY `client_id` (`client_id`),
    CONSTRAINT `image_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `client` (`client_id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB
  AUTO_INCREMENT = 48
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image`
    DISABLE KEYS */;
INSERT INTO `image`
VALUES (1, 1, '1.jpg', '嗷嗷', '2019-06-04 11:16:03'),
       (3, 3, '3.jpg', '测试', '2019-06-11 16:50:00'),
       (41, 1, '41.jpg', 'comment', '2019-06-11 17:27:21'),
       (42, 1, '42.jpg', 'comment', '2019-06-11 17:30:27'),
       (43, 1, '43.jpg', 'comment', '2019-06-11 17:30:36'),
       (44, 1, '44.jpg', 'comment', '2019-06-11 17:32:55'),
       (45, 1, '45.jpg', 'comment', '2019-06-11 17:34:14'),
       (46, 1, '46.jpg', 'comment', '2019-06-11 17:35:09');
/*!40000 ALTER TABLE `image`
    ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recharge`
--

DROP TABLE IF EXISTS `recharge`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
SET character_set_client = utf8mb4;
CREATE TABLE `recharge`
(
    `recharge_id`    int(11)        NOT NULL AUTO_INCREMENT,
    `card_id`        int(11)        NOT NULL,
    `recharge_price` decimal(10, 2) NOT NULL DEFAULT '0.00' COMMENT '充值金额',
    `recharge_money` decimal(10, 2) NOT NULL DEFAULT '0.00' COMMENT '充值后余额',
    `recharge_date`  datetime       NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '充值日期',
    PRIMARY KEY (`recharge_id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 7
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recharge`
--

LOCK TABLES `recharge` WRITE;
/*!40000 ALTER TABLE `recharge`
    DISABLE KEYS */;
INSERT INTO `recharge`
VALUES (1, 1, 100.00, 100.00, '2019-06-07 21:50:17'),
       (2, 2, 100.00, 200.00, '2019-06-11 15:12:14'),
       (3, 3, 100.00, 91.00, '2019-06-11 16:52:18');
/*!40000 ALTER TABLE `recharge`
    ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client = @@character_set_client */;
/*!50003 SET @saved_cs_results = @@character_set_results */;
/*!50003 SET @saved_col_connection = @@collation_connection */;
/*!50003 SET character_set_client = utf8mb4 */;
/*!50003 SET character_set_results = utf8mb4 */;
/*!50003 SET collation_connection = utf8mb4_0900_ai_ci */;
/*!50003 SET @saved_sql_mode = @@sql_mode */;
/*!50003 SET sql_mode = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */;
DELIMITER ;;
/*!50003 CREATE */ /*!50017 DEFINER =`root`@`%`*/ /*!50003 TRIGGER `recharge_BEFORE_INSERT`
    BEFORE INSERT
    ON `recharge`
    FOR EACH ROW
BEGIN
    update card set card_money=card_money + NEW.recharge_price where card_id = NEW.card_id;
    set NEW.recharge_money = (select card_money from card where card_id = NEW.card_id);
END */;;
DELIMITER ;
/*!50003 SET sql_mode = @saved_sql_mode */;
/*!50003 SET character_set_client = @saved_cs_client */;
/*!50003 SET character_set_results = @saved_cs_results */;
/*!50003 SET collation_connection = @saved_col_connection */;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
SET character_set_client = utf8mb4;
CREATE TABLE `service`
(
    `service_id`     int(11)                                                       NOT NULL AUTO_INCREMENT,
    `service_name`   varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    `service_price`  decimal(10, 2)                                                NOT NULL DEFAULT '0.00',
    `service_rebate` decimal(10, 2)                                                NOT NULL DEFAULT '0.00',
    PRIMARY KEY (`service_id`) USING BTREE
) ENGINE = InnoDB
  AUTO_INCREMENT = 4
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service`
    DISABLE KEYS */;
INSERT INTO `service`
VALUES (1, '1', 10.00, 0.50),
       (3, '测试', 10.00, 0.50);
/*!40000 ALTER TABLE `service`
    ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client = @@character_set_client */;
/*!50003 SET @saved_cs_results = @@character_set_results */;
/*!50003 SET @saved_col_connection = @@collation_connection */;
/*!50003 SET character_set_client = utf8mb4 */;
/*!50003 SET character_set_results = utf8mb4 */;
/*!50003 SET collation_connection = utf8mb4_0900_ai_ci */;
/*!50003 SET @saved_sql_mode = @@sql_mode */;
/*!50003 SET sql_mode = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */;
DELIMITER ;;
/*!50003 CREATE */ /*!50017 DEFINER =`root`@`%`*/ /*!50003 TRIGGER `service_BEFORE_DELETE`
    BEFORE DELETE
    ON `service`
    FOR EACH ROW
BEGIN
    insert into service2 values (OLD.service_id, OLD.service_name, OLD.service_price, OLD.service_rebate, now());
END */;;
DELIMITER ;
/*!50003 SET sql_mode = @saved_sql_mode */;
/*!50003 SET character_set_client = @saved_cs_client */;
/*!50003 SET character_set_results = @saved_cs_results */;
/*!50003 SET collation_connection = @saved_col_connection */;

--
-- Table structure for table `service2`
--

DROP TABLE IF EXISTS `service2`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
SET character_set_client = utf8mb4;
CREATE TABLE `service2`
(
    `service_id`          int(11) NOT NULL,
    `service_name`        varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    `service_price`       decimal(10, 2)                                                DEFAULT '0.00',
    `service_rebate`      decimal(10, 2)                                                DEFAULT '0.00',
    `service_delete_date` datetime                                                      DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`service_id`) USING BTREE
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service2`
--

LOCK TABLES `service2` WRITE;
/*!40000 ALTER TABLE `service2`
    DISABLE KEYS */;
INSERT INTO `service2`
VALUES (2, '2', 0.00, 0.00, '2019-06-08 09:53:29');
/*!40000 ALTER TABLE `service2`
    ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
SET character_set_client = utf8mb4;
CREATE TABLE `staff`
(
    `staff_id`       int(11)                                                       NOT NULL AUTO_INCREMENT,
    `staff_is_admin` int(1)                                                        NOT NULL DEFAULT '0' COMMENT '是否是管理员',
    `staff_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
    `staff_name`     varchar(255) COLLATE utf8mb4_unicode_ci                                DEFAULT NULL,
    `staff_phone`    varchar(255) COLLATE utf8mb4_unicode_ci                                DEFAULT NULL,
    `staff_question` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci          DEFAULT NULL COMMENT '密保问题',
    `staff_answer`   varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci          DEFAULT NULL COMMENT '密保答案',
    `staff_login`    int(1)                                                        NOT NULL DEFAULT '0' COMMENT '员工是否登陆',
    PRIMARY KEY (`staff_id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 7
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff`
    DISABLE KEYS */;
INSERT INTO `staff`
VALUES (1, 1, '000001', '阿明', '18766316233', '你妈妈叫什么名字', '她呀', 1),
       (6, 0, '000006', '魏强', '18766316239', '你的母亲叫什么名字？', '呵呵', 0);
/*!40000 ALTER TABLE `staff`
    ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client = @@character_set_client */;
/*!50003 SET @saved_cs_results = @@character_set_results */;
/*!50003 SET @saved_col_connection = @@collation_connection */;
/*!50003 SET character_set_client = utf8mb4 */;
/*!50003 SET character_set_results = utf8mb4 */;
/*!50003 SET collation_connection = utf8mb4_0900_ai_ci */;
/*!50003 SET @saved_sql_mode = @@sql_mode */;
/*!50003 SET sql_mode = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */;
DELIMITER ;;
/*!50003 CREATE */ /*!50017 DEFINER =`root`@`%`*/ /*!50003 TRIGGER `staff_BEFORE_DELETE`
    BEFORE DELETE
    ON `staff`
    FOR EACH ROW
BEGIN
    insert into staff2
    values (OLD.staff_id, OLD.staff_is_admin, OLD.staff_password, OLD.staff_name, OLD.staff_phone, OLD.staff_question,
            OLD.staff_answer, OLD.staff_login, now());
END */;;
DELIMITER ;
/*!50003 SET sql_mode = @saved_sql_mode */;
/*!50003 SET character_set_client = @saved_cs_client */;
/*!50003 SET character_set_results = @saved_cs_results */;
/*!50003 SET collation_connection = @saved_col_connection */;

--
-- Table structure for table `staff2`
--

DROP TABLE IF EXISTS `staff2`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
SET character_set_client = utf8mb4;
CREATE TABLE `staff2`
(
    `staff_id`          int(11) NOT NULL,
    `staff_is_admin`    int(1)                                                        DEFAULT NULL,
    `staff_password`    varchar(255) COLLATE utf8mb4_unicode_ci                       DEFAULT NULL,
    `staff_name`        varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    `staff_phone`       varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    `staff_question`    varchar(255) COLLATE utf8mb4_unicode_ci                       DEFAULT NULL,
    `staff_answer`      varchar(255) COLLATE utf8mb4_unicode_ci                       DEFAULT NULL,
    `staff_login`       int(1)                                                        DEFAULT NULL,
    `staff_delete_date` datetime                                                      DEFAULT NULL,
    PRIMARY KEY (`staff_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff2`
--

LOCK TABLES `staff2` WRITE;
/*!40000 ALTER TABLE `staff2`
    DISABLE KEYS */;
/*!40000 ALTER TABLE `staff2`
    ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'springdb'
--

--
-- Dumping routines for database 'springdb'
--
/*!50003 DROP FUNCTION IF EXISTS `cancel_consume` */;
/*!50003 SET @saved_cs_client = @@character_set_client */;
/*!50003 SET @saved_cs_results = @@character_set_results */;
/*!50003 SET @saved_col_connection = @@collation_connection */;
/*!50003 SET character_set_client = utf8mb4 */;
/*!50003 SET character_set_results = utf8mb4 */;
/*!50003 SET collation_connection = utf8mb4_0900_ai_ci */;
/*!50003 SET @saved_sql_mode = @@sql_mode */;
/*!50003 SET sql_mode = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */;
DELIMITER ;;
CREATE
    DEFINER = `root`@`%` FUNCTION `cancel_consume`(p_consume_id int) RETURNS int(1)
    DETERMINISTIC
BEGIN
    /*常量*/
    /*要撤销的卡id*/
    declare c_card_id int(11);
    /*要撤销的应付金额*/

    declare c_consume_price decimal(10, 2);
    /*要撤销的抵扣积分*/
    declare c_consume_deduct decimal(10, 2);
    /*要撤销的返利积分*/
    declare c_consume_rebate_price decimal(10, 2);
    /*推荐人卡号*/
    declare c_card_referrer int(11);
    /*循环中的临时变量*/
    declare t_consume_id int(11);

    /*判断循环是否关闭的标志位*/

    declare done int default 0;

    /*定义游标 以及赋值*/

    declare consume_list cursor for select consume_id
                                    from consume
                                    where consume_id > p_consume_id
                                      and card_id = (select card_id from consume where consume_id = p_consume_id);

    /*定义异常处理*/

    declare continue handler for not found set done = 1;


    /*获取要撤销的consume_price,consume_deduct*/

    select card_id, consume_price, consume_deduct, consume_rebate_price
    into c_card_id,c_consume_price,c_consume_deduct,c_consume_rebate_price
    from consume
    where consume_id = p_consume_id;
    /*修改consume表的consume_money,consume_point,consume_rebate_point*/

    open consume_list;

    fetch consume_list into t_consume_id;

    while done <> 1 do
    update consume
    set consume_money=consume_money + c_consume_price - c_consume_deduct,
        consume_point=consume_point + c_consume_deduct,
        consume_rebate_point=consume_rebate_point - c_consume_rebate_price
    where consume_id = t_consume_id;

    fetch consume_list into t_consume_id;
    end while;

    close consume_list;
    /*删除p_consume_id对应记录*/
    delete from consume where consume_id = p_consume_id;
    /*修改card表的card_money,card_point*/
    update card
    set card_money=card_money + c_consume_price - c_consume_deduct,
        card_point=card_point + c_consume_deduct
    where card_id = c_card_id;
    /*修改card表,推荐人card_point;update card不能嵌套select card（同一表）*/
    select card_referrer into c_card_referrer from card where card_id = c_card_id;
    update card
    set card_point=card_point - c_consume_rebate_price
    where card_id = c_card_referrer;

    RETURN done;

END ;;
DELIMITER ;
/*!50003 SET sql_mode = @saved_sql_mode */;
/*!50003 SET character_set_client = @saved_cs_client */;
/*!50003 SET character_set_results = @saved_cs_results */;
/*!50003 SET collation_connection = @saved_col_connection */;
/*!50003 DROP FUNCTION IF EXISTS `cancel_recharge` */;
/*!50003 SET @saved_cs_client = @@character_set_client */;
/*!50003 SET @saved_cs_results = @@character_set_results */;
/*!50003 SET @saved_col_connection = @@collation_connection */;
/*!50003 SET character_set_client = utf8mb4 */;
/*!50003 SET character_set_results = utf8mb4 */;
/*!50003 SET collation_connection = utf8mb4_0900_ai_ci */;
/*!50003 SET @saved_sql_mode = @@sql_mode */;
/*!50003 SET sql_mode = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */;
DELIMITER ;;
CREATE
    DEFINER = `root`@`%` FUNCTION `cancel_recharge`(p_recharge_id int) RETURNS int(1)
    DETERMINISTIC
BEGIN
    /*要撤销的卡id*/
    declare c_card_id int(11);
    /*要撤销的充值金额*/
    declare c_recharge_price decimal(10, 2);
    /*循环中的临时变量*/
    declare t_recharge_id int(11);
    /*判断循环是否关闭的标志位*/
    declare done int default 0;
    /*定义游标 以及赋值*/
    declare recharge_list cursor for select recharge_id
                                     from recharge
                                     where recharge_id > p_recharge_id
                                       and card_id = (select card_id from recharge where recharge_id = p_recharge_id);
    /*定义异常处理*/
    declare continue handler for not found set done = 1;

    /*获取要撤销的card_id,recharge_price*/
    select card_id, recharge_price
    into c_card_id,c_recharge_price
    from recharge
    where recharge_id = p_recharge_id;
    /*修改recharge表的recharge_money*/
    open recharge_list;
    fetch recharge_list into t_recharge_id;
    while done <> 1 do
    update recharge
    set recharge_money=recharge_money - c_recharge_price
    where recharge_id = t_recharge_id;
    fetch recharge_list into t_recharge_id;
    end while;
    close recharge_list;
    /*删除p_recharge_id对应记录*/
    delete from recharge where recharge_id = p_recharge_id;
    /*修改card表的card_money*/
    update card
    set card_money=card_money - c_recharge_price
    where card_id = c_card_id;
    RETURN done;
END ;;
DELIMITER ;
/*!50003 SET sql_mode = @saved_sql_mode */;
/*!50003 SET character_set_client = @saved_cs_client */;
/*!50003 SET character_set_results = @saved_cs_results */;
/*!50003 SET collation_connection = @saved_col_connection */;

--
-- Final view structure for view `all_card_client_view`
--

/*!50001 DROP VIEW IF EXISTS `all_card_client_view`*/;
/*!50001 SET @saved_cs_client = @@character_set_client */;
/*!50001 SET @saved_cs_results = @@character_set_results */;
/*!50001 SET @saved_col_connection = @@collation_connection */;
/*!50001 SET character_set_client = utf8mb4 */;
/*!50001 SET character_set_results = utf8mb4 */;
/*!50001 SET collation_connection = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM = UNDEFINED */
    /*!50013 DEFINER =`root`@`%` SQL SECURITY DEFINER */
    /*!50001 VIEW `all_card_client_view` AS
select `all_card_view`.`card_id`              AS `card_id`,
       `all_card_view`.`card_referrer`        AS `card_referrer`,
       `all_card_view`.`card_password`        AS `card_password`,
       `all_card_view`.`card_question`        AS `card_question`,
       `all_card_view`.`card_answer`          AS `card_answer`,
       `all_card_view`.`card_money`           AS `card_money`,
       `all_card_view`.`card_point`           AS `card_point`,
       `all_card_view`.`card_delete_date`     AS `card_delete_date`,
       `all_client_view`.`client_id`          AS `client_id`,
       `all_client_view`.`client_is_holder`   AS `client_is_holder`,
       `all_client_view`.`client_name`        AS `client_name`,
       `all_client_view`.`client_gender`      AS `client_gender`,
       `all_client_view`.`client_age`         AS `client_age`,
       `all_client_view`.`client_phone`       AS `client_phone`,
       `all_client_view`.`client_delete_date` AS `client_delete_date`
from (`all_card_view`
         join `all_client_view` on ((`all_card_view`.`card_id` = `all_client_view`.`card_id`))) */;
/*!50001 SET character_set_client = @saved_cs_client */;
/*!50001 SET character_set_results = @saved_cs_results */;
/*!50001 SET collation_connection = @saved_col_connection */;

--
-- Final view structure for view `all_card_recharge_view`
--

/*!50001 DROP VIEW IF EXISTS `all_card_recharge_view`*/;
/*!50001 SET @saved_cs_client = @@character_set_client */;
/*!50001 SET @saved_cs_results = @@character_set_results */;
/*!50001 SET @saved_col_connection = @@collation_connection */;
/*!50001 SET character_set_client = utf8mb4 */;
/*!50001 SET character_set_results = utf8mb4 */;
/*!50001 SET collation_connection = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM = UNDEFINED */
    /*!50013 DEFINER =`root`@`%` SQL SECURITY DEFINER */
    /*!50001 VIEW `all_card_recharge_view` AS
select `all_card_view`.`card_id`          AS `card_id`,
       `all_card_view`.`card_referrer`    AS `card_referrer`,
       `all_card_view`.`card_password`    AS `card_password`,
       `all_card_view`.`card_question`    AS `card_question`,
       `all_card_view`.`card_answer`      AS `card_answer`,
       `all_card_view`.`card_money`       AS `card_money`,
       `all_card_view`.`card_point`       AS `card_point`,
       `all_card_view`.`card_delete_date` AS `card_delete_date`,
       `recharge`.`recharge_id`           AS `recharge_id`,
       `recharge`.`recharge_price`        AS `recharge_price`,
       `recharge`.`recharge_money`        AS `recharge_money`,
       `recharge`.`recharge_date`         AS `recharge_date`
from (`all_card_view`
         join `recharge` on ((`all_card_view`.`card_id` = `recharge`.`card_id`))) */;
/*!50001 SET character_set_client = @saved_cs_client */;
/*!50001 SET character_set_results = @saved_cs_results */;
/*!50001 SET collation_connection = @saved_col_connection */;

--
-- Final view structure for view `all_card_view`
--

/*!50001 DROP VIEW IF EXISTS `all_card_view`*/;
/*!50001 SET @saved_cs_client = @@character_set_client */;
/*!50001 SET @saved_cs_results = @@character_set_results */;
/*!50001 SET @saved_col_connection = @@collation_connection */;
/*!50001 SET character_set_client = utf8mb4 */;
/*!50001 SET character_set_results = utf8mb4 */;
/*!50001 SET collation_connection = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM = UNDEFINED */
    /*!50013 DEFINER =`root`@`%` SQL SECURITY DEFINER */
    /*!50001 VIEW `all_card_view` AS select `card`.`card_id`       AS `card_id`,
                                            `card`.`card_referrer` AS `card_referrer`,
                                            `card`.`card_password` AS `card_password`,
                                            `card`.`card_question` AS `card_question`,
                                            `card`.`card_answer`   AS `card_answer`,
                                            `card`.`card_money`    AS `card_money`,
                                            `card`.`card_point`    AS `card_point`,
                                            NULL                   AS `card_delete_date`
                                     from `card`
                                     union all
                                     select `card2`.`card_id`          AS `card_id`,
                                            `card2`.`card_referrer`    AS `card_referrer`,
                                            `card2`.`card_password`    AS `card_password`,
                                            `card2`.`card_question`    AS `card_question`,
                                            `card2`.`card_answer`      AS `card_answer`,
                                            `card2`.`card_money`       AS `card_money`,
                                            `card2`.`card_point`       AS `card_point`,
                                            `card2`.`card_delete_date` AS `card_delete_date`
                                     from `card2` */;
/*!50001 SET character_set_client = @saved_cs_client */;
/*!50001 SET character_set_results = @saved_cs_results */;
/*!50001 SET collation_connection = @saved_col_connection */;

--
-- Final view structure for view `all_client_view`
--

/*!50001 DROP VIEW IF EXISTS `all_client_view`*/;
/*!50001 SET @saved_cs_client = @@character_set_client */;
/*!50001 SET @saved_cs_results = @@character_set_results */;
/*!50001 SET @saved_col_connection = @@collation_connection */;
/*!50001 SET character_set_client = utf8mb4 */;
/*!50001 SET character_set_results = utf8mb4 */;
/*!50001 SET collation_connection = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM = UNDEFINED */
    /*!50013 DEFINER =`root`@`%` SQL SECURITY DEFINER */
    /*!50001 VIEW `all_client_view` AS select `client`.`client_id`        AS `client_id`,
                                              `client`.`card_id`          AS `card_id`,
                                              `client`.`client_is_holder` AS `client_is_holder`,
                                              `client`.`client_name`      AS `client_name`,
                                              `client`.`client_gender`    AS `client_gender`,
                                              `client`.`client_age`       AS `client_age`,
                                              `client`.`client_phone`     AS `client_phone`,
                                              NULL                        AS `client_delete_date`
                                       from `client`
                                       union all
                                       select `client2`.`client_id`          AS `client_id`,
                                              `client2`.`card_id`            AS `card_id`,
                                              `client2`.`client_is_holder`   AS `client_is_holder`,
                                              `client2`.`client_name`        AS `client_name`,
                                              `client2`.`client_gender`      AS `client_gender`,
                                              `client2`.`client_age`         AS `client_age`,
                                              `client2`.`client_phone`       AS `client_phone`,
                                              `client2`.`client_delete_date` AS `client_delete_date`
                                       from `client2` */;
/*!50001 SET character_set_client = @saved_cs_client */;
/*!50001 SET character_set_results = @saved_cs_results */;
/*!50001 SET collation_connection = @saved_col_connection */;

--
-- Final view structure for view `all_consume_detail_view`
--

/*!50001 DROP VIEW IF EXISTS `all_consume_detail_view`*/;
/*!50001 SET @saved_cs_client = @@character_set_client */;
/*!50001 SET @saved_cs_results = @@character_set_results */;
/*!50001 SET @saved_col_connection = @@collation_connection */;
/*!50001 SET character_set_client = utf8mb4 */;
/*!50001 SET character_set_results = utf8mb4 */;
/*!50001 SET collation_connection = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM = UNDEFINED */
    /*!50013 DEFINER =`root`@`%` SQL SECURITY DEFINER */
    /*!50001 VIEW `all_consume_detail_view` AS
select `consume`.`consume_id`                      AS `consume_id`,
       `consume`.`staff_id`                        AS `staff_id`,
       `consume`.`card_id`                         AS `card_id`,
       `consume`.`client_id`                       AS `client_id`,
       `consume`.`service_id`                      AS `service_id`,
       `consume`.`consume_price`                   AS `consume_price`,
       `consume`.`consume_deduct`                  AS `consume_deduct`,
       `consume`.`consume_money`                   AS `consume_money`,
       `consume`.`consume_point`                   AS `consume_point`,
       `consume`.`consume_rebate_price`            AS `consume_rebate_price`,
       `consume`.`consume_rebate_point`            AS `consume_rebate_point`,
       `consume`.`consume_date`                    AS `consume_date`,
       `all_staff_view`.`staff_is_admin`           AS `staff_is_admin`,
       `all_staff_view`.`staff_password`           AS `staff_password`,
       `all_staff_view`.`staff_question`           AS `staff_question`,
       `all_staff_view`.`staff_answer`             AS `staff_answer`,
       `all_staff_view`.`staff_name`               AS `staff_name`,
       `all_staff_view`.`staff_phone`              AS `staff_phone`,
       `all_staff_view`.`staff_login`              AS `staff_login`,
       `all_staff_view`.`staff_delete_date`        AS `staff_delete_date`,
       `all_service_view`.`service_name`           AS `service_name`,
       `all_service_view`.`service_price`          AS `service_price`,
       `all_service_view`.`service_rebate`         AS `service_rebate`,
       `all_service_view`.`service_delete_date`    AS `service_delete_date`,
       `all_card_client_view`.`card_referrer`      AS `card_referrer`,
       `all_card_client_view`.`card_password`      AS `card_password`,
       `all_card_client_view`.`card_question`      AS `card_question`,
       `all_card_client_view`.`card_answer`        AS `card_answer`,
       `all_card_client_view`.`card_money`         AS `card_money`,
       `all_card_client_view`.`card_point`         AS `card_point`,
       `all_card_client_view`.`card_delete_date`   AS `card_delete_date`,
       `all_card_client_view`.`client_is_holder`   AS `client_is_holder`,
       `all_card_client_view`.`client_name`        AS `client_name`,
       `all_card_client_view`.`client_gender`      AS `client_gender`,
       `all_card_client_view`.`client_age`         AS `client_age`,
       `all_card_client_view`.`client_phone`       AS `client_phone`,
       `all_card_client_view`.`client_delete_date` AS `client_delete_date`
from (((`consume` join `all_staff_view` on ((`consume`.`staff_id` = `all_staff_view`.`staff_id`))) join `all_service_view` on ((`consume`.`service_id` = `all_service_view`.`service_id`)))
         join `all_card_client_view` on (((`consume`.`card_id` = `all_card_client_view`.`card_id`) and
                                          (`consume`.`client_id` = `all_card_client_view`.`client_id`)))) */;
/*!50001 SET character_set_client = @saved_cs_client */;
/*!50001 SET character_set_results = @saved_cs_results */;
/*!50001 SET collation_connection = @saved_col_connection */;

--
-- Final view structure for view `all_rebate_detail_view`
--

/*!50001 DROP VIEW IF EXISTS `all_rebate_detail_view`*/;
/*!50001 SET @saved_cs_client = @@character_set_client */;
/*!50001 SET @saved_cs_results = @@character_set_results */;
/*!50001 SET @saved_col_connection = @@collation_connection */;
/*!50001 SET character_set_client = utf8mb4 */;
/*!50001 SET character_set_results = utf8mb4 */;
/*!50001 SET collation_connection = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM = UNDEFINED */
    /*!50013 DEFINER =`root`@`%` SQL SECURITY DEFINER */
    /*!50001 VIEW `all_rebate_detail_view` AS
select `all_consume_detail_view`.`consume_id`           AS `consume_id`,
       `all_consume_detail_view`.`staff_id`             AS `staff_id`,
       `all_consume_detail_view`.`card_id`              AS `card_id`,
       `all_consume_detail_view`.`client_id`            AS `client_id`,
       `all_consume_detail_view`.`service_id`           AS `service_id`,
       `all_consume_detail_view`.`consume_price`        AS `consume_price`,
       `all_consume_detail_view`.`consume_deduct`       AS `consume_deduct`,
       `all_consume_detail_view`.`consume_money`        AS `consume_money`,
       `all_consume_detail_view`.`consume_point`        AS `consume_point`,
       `all_consume_detail_view`.`consume_rebate_price` AS `consume_rebate_price`,
       `all_consume_detail_view`.`consume_rebate_point` AS `consume_rebate_point`,
       `all_consume_detail_view`.`consume_date`         AS `consume_date`,
       `all_consume_detail_view`.`staff_is_admin`       AS `staff_is_admin`,
       `all_consume_detail_view`.`staff_password`       AS `staff_password`,
       `all_consume_detail_view`.`staff_question`       AS `staff_question`,
       `all_consume_detail_view`.`staff_answer`         AS `staff_answer`,
       `all_consume_detail_view`.`staff_name`           AS `staff_name`,
       `all_consume_detail_view`.`staff_phone`          AS `staff_phone`,
       `all_consume_detail_view`.`staff_login`          AS `staff_login`,
       `all_consume_detail_view`.`staff_delete_date`    AS `staff_delete_date`,
       `all_consume_detail_view`.`service_name`         AS `service_name`,
       `all_consume_detail_view`.`service_price`        AS `service_price`,
       `all_consume_detail_view`.`service_rebate`       AS `service_rebate`,
       `all_consume_detail_view`.`service_delete_date`  AS `service_delete_date`,
       `all_consume_detail_view`.`card_referrer`        AS `card_referrer`,
       `all_consume_detail_view`.`card_password`        AS `card_password`,
       `all_consume_detail_view`.`card_question`        AS `card_question`,
       `all_consume_detail_view`.`card_answer`          AS `card_answer`,
       `all_consume_detail_view`.`card_money`           AS `card_money`,
       `all_consume_detail_view`.`card_point`           AS `card_point`,
       `all_consume_detail_view`.`card_delete_date`     AS `card_delete_date`,
       `all_consume_detail_view`.`client_is_holder`     AS `client_is_holder`,
       `all_consume_detail_view`.`client_name`          AS `client_name`,
       `all_consume_detail_view`.`client_gender`        AS `client_gender`,
       `all_consume_detail_view`.`client_age`           AS `client_age`,
       `all_consume_detail_view`.`client_phone`         AS `client_phone`,
       `all_consume_detail_view`.`client_delete_date`   AS `client_delete_date`,
       `all_card_client_view`.`card_id`                 AS `referrer_card_id`,
       `all_card_client_view`.`card_referrer`           AS `referrer_card_referrer`,
       `all_card_client_view`.`card_password`           AS `referrer_card_password`,
       `all_card_client_view`.`card_question`           AS `referrer_card_question`,
       `all_card_client_view`.`card_answer`             AS `referrer_card_answer`,
       `all_card_client_view`.`card_money`              AS `referrer_card_money`,
       `all_card_client_view`.`card_point`              AS `referrer_card_point`,
       `all_card_client_view`.`card_delete_date`        AS `referrer_card_delete_date`,
       `all_card_client_view`.`client_id`               AS `referrer_client_id`,
       `all_card_client_view`.`client_is_holder`        AS `referrer_client_is_holder`,
       `all_card_client_view`.`client_name`             AS `referrer_client_name`,
       `all_card_client_view`.`client_gender`           AS `referrer_client_gender`,
       `all_card_client_view`.`client_age`              AS `referrer_client_age`,
       `all_card_client_view`.`client_phone`            AS `referrer_client_phone`,
       `all_card_client_view`.`client_delete_date`      AS `referrer_client_delete_date`
from (`all_consume_detail_view`
         join `all_card_client_view`
              on (((`all_consume_detail_view`.`card_referrer` = `all_card_client_view`.`card_id`) and
                   (`all_card_client_view`.`client_is_holder` = 1)))) */;
/*!50001 SET character_set_client = @saved_cs_client */;
/*!50001 SET character_set_results = @saved_cs_results */;
/*!50001 SET collation_connection = @saved_col_connection */;

--
-- Final view structure for view `all_service_view`
--

/*!50001 DROP VIEW IF EXISTS `all_service_view`*/;
/*!50001 SET @saved_cs_client = @@character_set_client */;
/*!50001 SET @saved_cs_results = @@character_set_results */;
/*!50001 SET @saved_col_connection = @@collation_connection */;
/*!50001 SET character_set_client = utf8mb4 */;
/*!50001 SET character_set_results = utf8mb4 */;
/*!50001 SET collation_connection = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM = UNDEFINED */
    /*!50013 DEFINER =`root`@`%` SQL SECURITY DEFINER */
    /*!50001 VIEW `all_service_view` AS select `service`.`service_id`     AS `service_id`,
                                               `service`.`service_name`   AS `service_name`,
                                               `service`.`service_price`  AS `service_price`,
                                               `service`.`service_rebate` AS `service_rebate`,
                                               NULL                       AS `service_delete_date`
                                        from `service`
                                        union all
                                        select `service2`.`service_id`          AS `service_id`,
                                               `service2`.`service_name`        AS `service_name`,
                                               `service2`.`service_price`       AS `service_price`,
                                               `service2`.`service_rebate`      AS `service_rebate`,
                                               `service2`.`service_delete_date` AS `service_delete_date`
                                        from `service2` */;
/*!50001 SET character_set_client = @saved_cs_client */;
/*!50001 SET character_set_results = @saved_cs_results */;
/*!50001 SET collation_connection = @saved_col_connection */;

--
-- Final view structure for view `all_staff_view`
--

/*!50001 DROP VIEW IF EXISTS `all_staff_view`*/;
/*!50001 SET @saved_cs_client = @@character_set_client */;
/*!50001 SET @saved_cs_results = @@character_set_results */;
/*!50001 SET @saved_col_connection = @@collation_connection */;
/*!50001 SET character_set_client = utf8mb4 */;
/*!50001 SET character_set_results = utf8mb4 */;
/*!50001 SET collation_connection = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM = UNDEFINED */
    /*!50013 DEFINER =`root`@`%` SQL SECURITY DEFINER */
    /*!50001 VIEW `all_staff_view` AS select `staff`.`staff_id`       AS `staff_id`,
                                             `staff`.`staff_is_admin` AS `staff_is_admin`,
                                             `staff`.`staff_password` AS `staff_password`,
                                             `staff`.`staff_name`     AS `staff_name`,
                                             `staff`.`staff_phone`    AS `staff_phone`,
                                             `staff`.`staff_question` AS `staff_question`,
                                             `staff`.`staff_answer`   AS `staff_answer`,
                                             `staff`.`staff_login`    AS `staff_login`,
                                             NULL                     AS `staff_delete_date`
                                      from `staff`
                                      union all
                                      select `staff2`.`staff_id`          AS `staff_id`,
                                             `staff2`.`staff_is_admin`    AS `staff_is_admin`,
                                             `staff2`.`staff_password`    AS `staff_password`,
                                             `staff2`.`staff_name`        AS `staff_name`,
                                             `staff2`.`staff_phone`       AS `staff_phone`,
                                             `staff2`.`staff_question`    AS `staff_question`,
                                             `staff2`.`staff_answer`      AS `staff_answer`,
                                             `staff2`.`staff_login`       AS `staff_login`,
                                             `staff2`.`staff_delete_date` AS `staff_delete_date`
                                      from `staff2` */;
/*!50001 SET character_set_client = @saved_cs_client */;
/*!50001 SET character_set_results = @saved_cs_results */;
/*!50001 SET collation_connection = @saved_col_connection */;

--
-- Final view structure for view `card_client_view`
--

/*!50001 DROP VIEW IF EXISTS `card_client_view`*/;
/*!50001 SET @saved_cs_client = @@character_set_client */;
/*!50001 SET @saved_cs_results = @@character_set_results */;
/*!50001 SET @saved_col_connection = @@collation_connection */;
/*!50001 SET character_set_client = utf8mb4 */;
/*!50001 SET character_set_results = utf8mb4 */;
/*!50001 SET collation_connection = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM = UNDEFINED */
    /*!50013 DEFINER =`root`@`%` SQL SECURITY DEFINER */
    /*!50001 VIEW `card_client_view` AS
select `card`.`card_id`            AS `card_id`,
       `card`.`card_referrer`      AS `card_referrer`,
       `card`.`card_password`      AS `card_password`,
       `card`.`card_question`      AS `card_question`,
       `card`.`card_answer`        AS `card_answer`,
       `card`.`card_money`         AS `card_money`,
       `card`.`card_point`         AS `card_point`,
       `client`.`client_id`        AS `client_id`,
       `client`.`client_is_holder` AS `client_is_holder`,
       `client`.`client_name`      AS `client_name`,
       `client`.`client_gender`    AS `client_gender`,
       `client`.`client_age`       AS `client_age`,
       `client`.`client_phone`     AS `client_phone`
from (`card`
         join `client` on ((`client`.`card_id` = `card`.`card_id`))) */;
/*!50001 SET character_set_client = @saved_cs_client */;
/*!50001 SET character_set_results = @saved_cs_results */;
/*!50001 SET collation_connection = @saved_col_connection */;

--
-- Final view structure for view `client_image_left_view`
--

/*!50001 DROP VIEW IF EXISTS `client_image_left_view`*/;
/*!50001 SET @saved_cs_client = @@character_set_client */;
/*!50001 SET @saved_cs_results = @@character_set_results */;
/*!50001 SET @saved_col_connection = @@collation_connection */;
/*!50001 SET character_set_client = utf8mb4 */;
/*!50001 SET character_set_results = utf8mb4 */;
/*!50001 SET collation_connection = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM = UNDEFINED */
    /*!50013 DEFINER =`root`@`%` SQL SECURITY DEFINER */
    /*!50001 VIEW `client_image_left_view` AS
select `client`.`client_id`        AS `client_id`,
       `client`.`card_id`          AS `card_id`,
       `client`.`client_is_holder` AS `client_is_holder`,
       `client`.`client_name`      AS `client_name`,
       `client`.`client_gender`    AS `client_gender`,
       `client`.`client_age`       AS `client_age`,
       `client`.`client_phone`     AS `client_phone`,
       `image`.`image_id`          AS `image_id`,
       `image`.`image_name`        AS `image_name`,
       `image`.`image_comment`     AS `image_comment`,
       `image`.`image_date`        AS `image_date`
from (`client`
         left join `image` on ((`image`.`client_id` = `client`.`client_id`))) */;
/*!50001 SET character_set_client = @saved_cs_client */;
/*!50001 SET character_set_results = @saved_cs_results */;
/*!50001 SET collation_connection = @saved_col_connection */;

--
-- Final view structure for view `consume_day_view`
--

/*!50001 DROP VIEW IF EXISTS `consume_day_view`*/;
/*!50001 SET @saved_cs_client = @@character_set_client */;
/*!50001 SET @saved_cs_results = @@character_set_results */;
/*!50001 SET @saved_col_connection = @@collation_connection */;
/*!50001 SET character_set_client = utf8mb4 */;
/*!50001 SET character_set_results = utf8mb4 */;
/*!50001 SET collation_connection = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM = UNDEFINED */
    /*!50013 DEFINER =`root`@`%` SQL SECURITY DEFINER */
    /*!50001 VIEW `consume_day_view` AS
select date_format(`all_consume_detail_view`.`consume_date`, '%Y-%m-%d') AS `consume_day`,
       count(`all_consume_detail_view`.`consume_id`)                     AS `day_consume_num`,
       sum(`all_consume_detail_view`.`consume_price`)                    AS `day_consume_price`,
       sum(`all_consume_detail_view`.`consume_deduct`)                   AS `day_consume_deduct`,
       sum(`all_consume_detail_view`.`consume_rebate_price`)             AS `day_consume_rebate`,
       count(distinct `all_consume_detail_view`.`client_id`)             AS `day_client_num`,
       count(distinct `all_consume_detail_view`.`staff_id`)              AS `day_staff_num`,
       count(distinct `all_consume_detail_view`.`service_id`)            AS `day_service_num`
from `all_consume_detail_view`
group by `consume_day` */;
/*!50001 SET character_set_client = @saved_cs_client */;
/*!50001 SET character_set_results = @saved_cs_results */;
/*!50001 SET collation_connection = @saved_col_connection */;

--
-- Final view structure for view `consume_month_view`
--

/*!50001 DROP VIEW IF EXISTS `consume_month_view`*/;
/*!50001 SET @saved_cs_client = @@character_set_client */;
/*!50001 SET @saved_cs_results = @@character_set_results */;
/*!50001 SET @saved_col_connection = @@collation_connection */;
/*!50001 SET character_set_client = utf8mb4 */;
/*!50001 SET character_set_results = utf8mb4 */;
/*!50001 SET collation_connection = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM = UNDEFINED */
    /*!50013 DEFINER =`root`@`%` SQL SECURITY DEFINER */
    /*!50001 VIEW `consume_month_view` AS
select date_format(`all_consume_detail_view`.`consume_date`, '%Y%u') AS `consume_month`,
       count(`all_consume_detail_view`.`consume_id`)                 AS `month_consume_num`,
       sum(`all_consume_detail_view`.`consume_price`)                AS `month_consume_price`,
       sum(`all_consume_detail_view`.`consume_deduct`)               AS `month_consume_deduct`,
       sum(`all_consume_detail_view`.`consume_rebate_price`)         AS `month_consume_rebate`,
       count(distinct `all_consume_detail_view`.`client_id`)         AS `month_client_num`,
       count(distinct `all_consume_detail_view`.`staff_id`)          AS `month_staff_num`,
       count(distinct `all_consume_detail_view`.`service_id`)        AS `month_service_num`
from `all_consume_detail_view`
group by `consume_month` */;
/*!50001 SET character_set_client = @saved_cs_client */;
/*!50001 SET character_set_results = @saved_cs_results */;
/*!50001 SET collation_connection = @saved_col_connection */;

--
-- Final view structure for view `consume_week_view`
--

/*!50001 DROP VIEW IF EXISTS `consume_week_view`*/;
/*!50001 SET @saved_cs_client = @@character_set_client */;
/*!50001 SET @saved_cs_results = @@character_set_results */;
/*!50001 SET @saved_col_connection = @@collation_connection */;
/*!50001 SET character_set_client = utf8mb4 */;
/*!50001 SET character_set_results = utf8mb4 */;
/*!50001 SET collation_connection = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM = UNDEFINED */
    /*!50013 DEFINER =`root`@`%` SQL SECURITY DEFINER */
    /*!50001 VIEW `consume_week_view` AS
select date_format(`all_consume_detail_view`.`consume_date`, '%Y%u') AS `consume_week`,
       count(`all_consume_detail_view`.`consume_id`)                 AS `week_consume_num`,
       sum(`all_consume_detail_view`.`consume_price`)                AS `week_consume_price`,
       sum(`all_consume_detail_view`.`consume_deduct`)               AS `week_consume_deduct`,
       sum(`all_consume_detail_view`.`consume_rebate_price`)         AS `week_consume_rebate`,
       count(distinct `all_consume_detail_view`.`client_id`)         AS `week_client_num`,
       count(distinct `all_consume_detail_view`.`staff_id`)          AS `week_staff_num`,
       count(distinct `all_consume_detail_view`.`service_id`)        AS `week_service_num`
from `all_consume_detail_view`
group by `consume_week` */;
/*!50001 SET character_set_client = @saved_cs_client */;
/*!50001 SET character_set_results = @saved_cs_results */;
/*!50001 SET collation_connection = @saved_col_connection */;

--
-- Final view structure for view `cost_month_view`
--

/*!50001 DROP VIEW IF EXISTS `cost_month_view`*/;
/*!50001 SET @saved_cs_client = @@character_set_client */;
/*!50001 SET @saved_cs_results = @@character_set_results */;
/*!50001 SET @saved_col_connection = @@collation_connection */;
/*!50001 SET character_set_client = utf8mb4 */;
/*!50001 SET character_set_results = utf8mb4 */;
/*!50001 SET collation_connection = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM = UNDEFINED */
    /*!50013 DEFINER =`root`@`%` SQL SECURITY DEFINER */
    /*!50001 VIEW `cost_month_view` AS
select date_format(`cost`.`cost_date`, '%Y%m') AS `cost_month`,
       count(0)                                AS `month_cost_num`,
       sum(`cost`.`cost_money`)                AS `month_cost_money`
from `cost`
group by `cost_month` */;
/*!50001 SET character_set_client = @saved_cs_client */;
/*!50001 SET character_set_results = @saved_cs_results */;
/*!50001 SET collation_connection = @saved_col_connection */;

--
-- Final view structure for view `cost_week_view`
--

/*!50001 DROP VIEW IF EXISTS `cost_week_view`*/;
/*!50001 SET @saved_cs_client = @@character_set_client */;
/*!50001 SET @saved_cs_results = @@character_set_results */;
/*!50001 SET @saved_col_connection = @@collation_connection */;
/*!50001 SET character_set_client = utf8mb4 */;
/*!50001 SET character_set_results = utf8mb4 */;
/*!50001 SET collation_connection = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM = UNDEFINED */
    /*!50013 DEFINER =`root`@`%` SQL SECURITY DEFINER */
    /*!50001 VIEW `cost_week_view` AS
select date_format(`cost`.`cost_date`, '%Y%u') AS `cost_week`,
       count(0)                                AS `week_cost_num`,
       sum(`cost`.`cost_money`)                AS `week_cost_money`
from `cost`
group by `cost_week` */;
/*!50001 SET character_set_client = @saved_cs_client */;
/*!50001 SET character_set_results = @saved_cs_results */;
/*!50001 SET collation_connection = @saved_col_connection */;
/*!40103 SET TIME_ZONE = @OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE = @OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT = @OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS = @OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION = @OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES = @OLD_SQL_NOTES */;

-- Dump completed on 2019-06-16 23:07:26
