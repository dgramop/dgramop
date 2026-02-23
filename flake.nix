{
  description = "dgramop frontend";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};

        yarnOfflineCache = pkgs.fetchYarnDeps {
          yarnLock = "${self}/yarn.lock";
          hash = "sha256-thZAK0svzEvelcXFHXfu8sMIBSAQ++c0ObXU3Gr6K+4=";
        };

        frontend = pkgs.stdenv.mkDerivation {
          name = "dgramop_frontend";
          src = self;
          inherit yarnOfflineCache;
          
          dontStrip = true;
          buildInputs = [pkgs.yarnConfigHook pkgs.yarnBuildHook pkgs.yarnInstallHook];
          installPhase =  ''
          mkdir $out
          mv build $out/www
          '';

        };
      in 
        {
          packages = {
            yco = yarnOfflineCache;
            default = frontend;
          };
          devShells = {
            default = pkgs.mkShell {
              buildInputs = with pkgs; [
                yarn
                nodejs
              ];
            };
          };
        }
    );
}
