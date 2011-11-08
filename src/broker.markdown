# SAPO Broker

<div class="page-header"></div>

## What is it?

SAPO Broker is a distributed messaging framework. Among other features, it provides minimal administration overhead, Publish-Subscribe and Point-to-Point messaging, guaranteed delivery and wildcard subscriptions.

SAPO Broker is written in Java, but has client libraries for [Perl][pl], [Python][py], [PHP][php], [.NET][net], [C][c] and quite a few [others][o], and you can talk to it using Thrift, XML or JSON.

To start using SAPO Broker take a look at the Quick Start tutorial, and then please read the User Guide for more in depth information.

You can access our public broker server at <code>broker.labs.sapo.pt</code> and subscribe to a number of public topics to experiment with.

## How do I get started?

Download the latest distribution bundle and read the Quick Start. To learn more about the design and concepts of SAPO Broker read the User Guide.

You can fetch the latest version of the SAPO Broker source code from our Git repo. For checking out the code use the <code>git</code> command line client as follows:

<pre class="prettyprint">
git clone git@github.com:sapo/sapo-broker.git
</pre>

## License

The SAPO Broker core is distributed under the [BSD license][bsd]. Some dependencies or extensions are under [separate licensing][l].

## How to get involved

Go ahead and [fork][repo] the project or subscribe to the [mailing-list][ml].

----

<a name="perl"></a>

# Using the Perl client

# Installing from source

<pre class="prettyprint">
git clone git@github.com:sapo/sapo-broker.git
cd sapo-broker/clients/perl-component && perl Makefile.PL
make install
</pre>

During build, must select at least one of the `thrift` or `protobuf` codecs, otherwise the `makefile` won't be created

## Dependencies

### Thrift

The build process should be similar to:

<pre class="prettyprint">
wget 'http://www.apache.org/dist//incubator/thrift/XXX-incubating/thrift-XXX.tar.gz'
tar -xzf thrift-XXX.tar.gz 
cd thrift-XXX/lib/perl/
perl Makefile.PL
#you may need to install dependencies from CPAN
make
sudo make install
</pre>

### Protobuf

Most distributions will have `protobuf` packages, but you can always compile and install from source as follows:

<pre class="prettyprint">
wget http://protobuf.googlecode.com/files/protobuf-XXX.tar.bz2
tar -xjf protobuf-XXX.tar.bz2
cd protobuf-XXX
./configure
make
sudo make install
</pre>

## Testing

The build process also runs the tests. By default tests connect to the broker in localhost. You can change this for a broker server running in another host by setting the environment variable `BROKER_HOST`.

> If the test broker doesn't have SSL support you should define `BROKER_DISABLE_SSL` to 1.

## Perl Client Usage

Here's a simple producer/publisher:

<pre class="prettyprint">
use SAPO::Broker::Clients::Simple;
        
use strict;
use warnings;
        
# connects to localhost using tcp by default (can also use udp or ssl)
my $broker = SAPO::Broker::Clients::Simple->new(host=>'localhost', proto=>'tcp'); 

my %options = (
    'destination_type' => 'QUEUE', #can also be TOPIC
    'destination' => '/tests/perl',
);

# now publish something
$broker->publish(%options, 'payload' => "This is the payload");

# and subscribe to something
$broker->subscribe(%options, auto_acknowledge => 1); # auto_acknowledge makes life simpler
my $notification = $broker->receive;
my $payload = $notification->message->payload;
</pre>

[repo]: https://github.com/sapo/sapo-broker
[ml]: http://listas.softwarelivre.SAPO.pt/mailman/listinfo/broker
[bsd]: https://github.com/sapo/sapo-broker/blob/master/license/LICENSE.txt
[l]: https://github.com/sapo/sapo-broker/tree/master/license
[c]: https://github.com/sapo/sapo-broker/tree/master/clients/c-component
[net]: https://github.com/sapo/sapo-broker/tree/master/clients/dotnet-component
[o]: https://github.com/sapo/sapo-broker/tree/master/clients
[pl]: #perl
[py]: https://github.com/sapo/sapo-broker/tree/master/clients/python-component)
[php]: #php