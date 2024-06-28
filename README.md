## 介绍

我的在线简历，[点击这里](https://iseexuhs.github.io/cv-cn/)访问。

## Theme

本网站主题在[online-cv](https://github.com/sharu725/online-cv)的基础上修改，感谢原创者的贡献。

## License

This project is licensed under the [MIT license](LICENSE.txt).

### Tips for Modification

原始仓库中的/_data/data.yml中有一个section介绍的是projects，为了满足我个人的需求，现在已经改成了honors，用于呈现**奖励 & 荣誉**。修改section涉及以下几个步骤：

- 进入`/_includes`目录，找到想要修改的section对应的html文件，比如honors.html，则将honors.html文件名和文件中所有的honor替换成目标section名，比如award。*（其实同时修改了honors和honor）*
- 修改CSS。进入`/_sass/_base.scss`，找到honor.html对应的class定义处，所有的honor替换成award。*（具体情况具体对待）*
- 进入根目录，在index.html文件的相应位置修改html包含代码，比如`{% include honors.html}` -> `{% include awards.html}`

如果想增加section，也是相同思路。