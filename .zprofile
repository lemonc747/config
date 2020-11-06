
# Setting PATH for Python 3.7
# The original version is saved in .bash_profile.pysave
# export PATH="/Library/Frameworks/Python.framework/Versions/3.7/bin:${PATH}"

# python
PATH=$PATH:/Library/Frameworks/Python.framework/Versions/3.7/bin
# alias ng="~/config/.npm-global/bin/ng"


# java环境
JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_201.jdk/Contents/Home
PATH=$JAVA_HOME/bin:$PATH:.
CLASSPATH=$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar:.
export JAVA_HOME
export CLASSPATH


# flutter配置
# 国内用户需要设置镜像
PUB_HOSTED_URL=https://pub.flutter-io.cn
FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
PATH=/Users/shinystars/DevTools/flutter/bin:$PATH
export PUB_HOSTED_URL
export FLUTTER_STORAGE_BASE_URL


# maven
# MAVEN_HOME=/Users/shinystars/developApp/apache-maven-3.6.3
# PATH=$PATH:$MAVEN_HOME/bin
# export MAVEN_HOME

export PATH