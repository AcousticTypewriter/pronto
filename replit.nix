{ pkgs }: {
    deps = [
        pkgs.bashInteractive
        pkgs.unzip
        pkgs.htop
        pkgs.busybox
        pkgs.nodePackages.typescript-language-server
        pkgs.nodePackages.bun-types
    ];
}