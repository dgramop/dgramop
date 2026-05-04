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
      in
        {
          packages.default = pkgs.runCommand "dgramop_frontend" {} ''
            mkdir -p $out/www
            cp -r ${self}/public/* $out/www/
          '';

          devShells.default = pkgs.mkShell {
            buildInputs = [ pkgs.darkhttpd ];
            shellHook = ''
              alias serve="darkhttpd public --port 8000"
            '';
          };
        }
    );
}
