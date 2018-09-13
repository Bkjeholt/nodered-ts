#!/bin/bash -f

echo "---------------------------------------------------------------------------"
echo "-- Start the tellstick service "
echo "---------------------------------------------------------------------------"

/usr/sbin/telldusd &

echo "---------------------------------------------------------------------------"
echo "-- Start the node-red web page "
echo "---------------------------------------------------------------------------"

# cp /opt/example-flows/* /root/.node-red/lib/flows/

exec /usr/local/bin/node-red
