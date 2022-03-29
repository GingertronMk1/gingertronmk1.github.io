if command -v jq &> /dev/null
then
  THREADSJSON=`cat src/assets/json/threads.json`
  echo $THREADSJSON
  CURRENT=`echo $THREADSJSON | jq 'to_entries[-1].value'`
  THREADS=`echo $CURRENT | jq '.[]' -r`
  echo $THREADS
  for THREAD in $THREADS
  do
    THREADURL="https://api.reddit.com/r/superleague/comments/$THREAD"
    OUTPUTPATH="src/assets/json/threads/$THREAD.json"
    echo $THREADURL
    echo $OUTPUTPATH
    curl -A $RANDOM $THREADURL -o $OUTPUTPATH
    cat $OUTPUTPATH
    sleep 15
  done
  ls -la assets/json
fi


