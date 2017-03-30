-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-02-15 10:38:09
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
  `newsimg` varchar(400) NOT NULL,
  `newscontent` text NOT NULL,
  `newssrc` text NOT NULL,
  `addtime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `newsstatus` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='新闻表';

--
-- 转存表中的数据 `newslist`
--

INSERT INTO `newslist` (`newsid`, `newstype`, `newstitle`, `newsimg`, `newscontent`, `newssrc`, `addtime`, `newsstatus`) VALUES
(15, '社会', '南京“垂直森林”引关注 系亚洲首例(图)', 'http://photocdn.sohu.com/20170207/Img480106685.jpeg', '', '观察者', '2017-02-01 00:00:00', ''),
(16, '娱乐', '盘踞春晚18年的“笑脸哥”，他的真实身份是这样的', 'http://image.cqcb.com/d/file/personage/2017-02-06/da73c390a406c8d1490cb35184987569.jpeg', '', '中国日报网', '2017-02-07 00:00:00', ''),
(17, '推荐', '农村人晒豪宅 城里人感慨：你们那房子真便宜', 'http://img1.gtimg.com/18/1890/189028/18902810_980x1200_0.jpg', '', '腾讯图片', '2017-02-06 00:00:00', ''),
(19, '社会', '2050年中国将成最大经济体 英国仍位于前十', 'http://p1.ifengimg.com/a/2017_06/ce6ac58071d626a_size119_w693_h390.jpg', '', '凤凰国际iMarkets', '2017-02-08 00:00:00', ''),
(20, '军事', '解放军火箭军紧急演练 竟遭遇强行加塞、超车', 'http://www.shangol.cn/uploads/allimg/170207/1015516215_0.jpg', '', '商洛在线', '2017-02-08 00:00:00', ''),
(21, '百家', '如何把看似无趣的事情变得有意义？', 'https://timg01.bdimg.com/timg?pacompress&imgtype=0&sec=1439619614&di=57caee8abdb4850e12470b652a3e3104&quality=60&size=b640_10000&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2Fe80a7b6f64923339193b8251d0100b50.jpeg', '', '百家号', '2017-02-08 00:00:00', ''),
(22, '女人', '张柏芝拍摄帅酷魅惑杂志封面，网友：多少人曾爱慕你年轻的容颜！', 'http://t12.baidu.com/it/u=685786115,3915106222&fm=170&s=E8E233671E4E08510CBDE08A01008092&w=218&h=146&img.JPEG', '', '百度', '2017-02-08 00:00:00', ''),
(23, '科技', '魅族2月15日又发新品 邀请函是个快充头 .', 'http://t11.baidu.com/it/u=1454285290,1326578086&fm=170&s=3F25E907B6949D9EF919F5C80100E091&w=218&h=146&img.JPEG', '', '魅族', '2016-02-08 00:00:00', ''),
(24, '本地', '北京老字号企业赶制元宵', 'http://t12.baidu.com/it/u=1671935420,1536759678&fm=170&s=05D65E85111267DE128130C3030080B0&w=218&h=146&img.JPEG', '', '本地', '2017-02-08 00:00:00', ''),
(25, '科技', '北京老字号企业赶制元宵', 'http://t12.baidu.com/it/u=1671935420,1536759678&fm=170&s=05D65E85111267DE128130C3030080B0&w=218&h=146&img.JPEG', '', '本地', '2017-02-07 00:00:00', ''),
(26, '图片', '2017年2月手机APP排行榜：115网盘这点秒杀百度网盘', 'http://t12.baidu.com/it/u=1068117896,3692747407&fm=170&s=C1E49B46CD0188CE105A4EB303008007&w=218&h=146&img.JPEG', '', '快科技', '2017-02-07 00:00:00', ''),
(27, '互联网', '2017年2月手机APP排行榜：115网盘这点秒杀百度网盘', 'http://t12.baidu.com/it/u=1068117896,3692747407&fm=170&s=C1E49B46CD0188CE105A4EB303008007&w=218&h=146&img.JPEG', '', '快科技', '2017-02-08 00:00:00', ''),
(43, '社会', '老人落入36米深机井被卡7米深处 6小时后获救', 'http://t12.baidu.com/it/u=3834550091,3215794258&fm=170&s=E8C2722346A324B21CB01C870100E091&w=218&h=146&img.JPEG', '', '百度', '2017-02-15 00:00:00', '');

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
  MODIFY `newsid` int(8) NOT NULL AUTO_INCREMENT COMMENT '自动增长', AUTO_INCREMENT=46;
--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(8) NOT NULL AUTO_INCREMENT COMMENT '自增';
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
