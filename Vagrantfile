# -*- mode: ruby -*-
# vi: set ft=ruby :

# This Vagrantfile targets the vagrant-lxc provider. It should work on other providers given
# a relatively recent version of Vagrant, but your mileage may vary.

Vagrant.configure("2") do |config|
  config.vm.box = "precise64"

  # Forward a port to the development server
  config.vm.network :forwarded_port, guest: 4000, host: 4000, host_ip: '0.0.0.0'

  # Provision packages -- if you change this after creating the VM, just do "vagrant provision" to run it again
  config.vm.provision :shell, :inline => <<END
# Check if we need to perform a weekly upgrade - this also triggers initial provisioning
touch -d '-1 week' /tmp/.limit

# Install base packages
if [ /tmp/.limit -nt /var/cache/apt/pkgcache.bin ]; then
    apt-get -y remove puppet chef
    apt-get -y autoremove
    apt-get -y update
    apt-get -y dist-upgrade
    apt-get -y install htop tmux vim rsync rubygems
fi
rm /tmp/.limit

if [ ! -x /usr/bin/jekyll ]; then
    gem install jekyll
fi

END
end
