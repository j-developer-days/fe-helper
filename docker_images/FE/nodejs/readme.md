---create docker image

docker build -t nodejs:node24a .

docker image ls | grep nodejs | grep node24a
REPOSITORY        TAG       IMAGE ID       CREATED         SIZE
nodejs            node24a   c9e906d41337   9 hours ago     202MB