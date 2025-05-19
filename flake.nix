{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        node-modules = pkgs.mkYarnPackage {
          name = "node-modules";
          src = ./.;
        };
      in
      {
        packages.node-modules = node-modules;
        packages.frontend = pkgs.stdenv.mkDerivation {
          name = "frontend";
          src = ./.;
          buildInputs = [pkgs.yarn node-modules];
          buildPhase = ''
            ln -s ${node-modules}/libexec/dgramop/node_modules node_modules
            ${pkgs.yarn} build";
          '';
          installPhase =  ''
            mkdir $out
            mv dist $out/lib
          '';
        };
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs
            pkgs.yarn
          ];
        };
      }
    );
}
