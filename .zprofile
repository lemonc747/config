
# Setting PATH for Python 3.7
# The original version is saved in .bash_profile.pysave
# export PATH="/Library/Frameworks/Python.framework/Versions/3.7/bin:${PATH}"
export PATH="$PATH:/Library/Frameworks/Python.framework/Versions/3.7/bin"
# alias ng="~/config/.npm-global/bin/ng"

JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_201.jdk/Contents/Home
PATH=$JAVA_HOME/bin:$PATH:.
CLASSPATH=$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar:.
export JAVA_HOME
export PATH
export CLASSPATH

export MAVEN_HOME=/Users/shinystars/developApp/apache-maven-3.6.3
export PATH=$PATH:$MAVEN_HOME/bin