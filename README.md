# art-template-demo
express + arttemplate 的压测代码



1、npm install
2、npm run start
3、ab -c 100 -t20 http://localhost:3002/


跑压力测试多次后发现QPS持续下降！！！！！QPS从170多降到22。

这种性能快有什么用呢？都通不过压力测试
