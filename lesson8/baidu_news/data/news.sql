-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-02-08 07:10:07
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `news`
--

-- --------------------------------------------------------

--
-- 表的结构 `newslist`
--

CREATE TABLE `newslist` (
  `newsid` int(8) NOT NULL COMMENT '自动增长',
  `newstype` varchar(20) NOT NULL,
  `newstitle` varchar(100) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newscontent` text NOT NULL,
  `newssrc` text NOT NULL,
  `addtime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `newsstatus` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='新闻表';

--
-- 转存表中的数据 `newslist`
--

INSERT INTO `newslist` (`newsid`, `newstype`, `newstitle`, `newsimg`, `newscontent`, `newssrc`, `addtime`, `newsstatus`) VALUES
(15, '社会', '南京“垂直森林”引关注 系亚洲首例(图)', 'http://photocdn.sohu.com/20170207/Img480106685.jpeg', '', '观察者网', '2017-02-02 00:00:00', ''),
(16, '娱乐', '盘踞春晚18年的“笑脸哥”，他的真实身份是这样的', 'http://image.cqcb.com/d/file/personage/2017-02-06/da73c390a406c8d1490cb35184987569.jpeg', '', '中国日报网', '2017-02-07 00:00:00', ''),
(17, '推荐', '农村人晒豪宅 城里人感慨：你们那房子真便宜', 'http://img1.gtimg.com/18/1890/189028/18902810_980x1200_0.jpg', '', '腾讯图片', '2017-02-06 00:00:00', ''),
(18, '推荐', '农村人晒豪宅 城里人感慨：你们那房子真便宜', 'http://img1.gtimg.com/18/1890/189028/18902810_980x1200_0.jpg', '', '腾讯图片', '2017-02-06 00:00:00', ''),
(19, '社会', '2050年中国将成最大经济体 英国仍位于前十', 'http://p1.ifengimg.com/a/2017_06/ce6ac58071d626a_size119_w693_h390.jpg', '', '凤凰国际iMarkets', '2017-02-08 00:00:00', ''),
(20, '军事', '解放军火箭军紧急演练 竟遭遇强行加塞、超车', 'http://www.shangol.cn/uploads/allimg/170207/1015516215_0.jpg', '', '商洛在线', '2017-02-08 00:00:00', '');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `userid` int(8) NOT NULL COMMENT '自增',
  `username` varchar(16) NOT NULL,
  `password` varchar(20) NOT NULL,
  `description` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `newslist`
--
ALTER TABLE `newslist`
  ADD PRIMARY KEY (`newsid`),
  ADD KEY `newstitle` (`newstitle`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`),
  ADD KEY `username` (`username`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `newslist`
--
ALTER TABLE `newslist`
  MODIFY `newsid` int(8) NOT NULL AUTO_INCREMENT COMMENT '自动增长', AUTO_INCREMENT=21;
--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(8) NOT NULL AUTO_INCREMENT COMMENT '自增';
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
